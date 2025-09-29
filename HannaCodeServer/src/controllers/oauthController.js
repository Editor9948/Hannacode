const axios = require('axios');
const crypto = require('crypto');
const User = require('../models/User');
const logger = require('../utils/logger');
const ErrorResponse = require('../utils/errorResponse');
const { _sendTokenResponse } = require('./authController');

// In-memory ephemeral stores (replace with Redis in production for multi-instance)
const stateStore = new Map();
const codeStore = new Map();
const STATE_TTL_MS = 10 * 60 * 1000; // 10 min
const EPHEMERAL_CODE_TTL_MS = 2 * 60 * 1000; // 2 min

function makeRandom(len = 24) { return crypto.randomBytes(len).toString('hex'); }

// Generate a password that satisfies complexity: at least one upper, lower, digit, special, length >= 12
function makeCompliantPassword() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const special = '@$!%*?&';
  const pick = (set) => set[Math.floor(Math.random() * set.length)];
  // Ensure each category present
  let pwd = pick(upper) + pick(lower) + pick(digits) + pick(special);
  const all = upper + lower + digits + special;
  while (pwd.length < 16) pwd += pick(all);
  return pwd;
}

function putWithTTL(map, key, value, ttl) {
  map.set(key, { value, expires: Date.now() + ttl });
}
function takeIfValid(map, key) {
  const entry = map.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires) { map.delete(key); return null; }
  map.delete(key);
  return entry.value;
}

function createState() {
  const s = makeRandom(16);
  putWithTTL(stateStore, s, true, STATE_TTL_MS);
  return s;
}

function validateState(s) {
  return !!takeIfValid(stateStore, s);
}

async function linkOrCreateUser(provider, profile) {
  // profile: { id, email, emailVerified, name, avatar }
  let user = await User.findOne({ 'oauthProviders.provider': provider, 'oauthProviders.providerId': profile.id });
  if (!user && profile.email) {
    user = await User.findOne({ email: profile.email });
  }
  if (!user) {
    // create new
  const placeholderPassword = makeCompliantPassword(); // hashed by pre-save and passes validator
    user = await User.create({
      name: profile.name || (profile.email ? profile.email.split('@')[0] : provider + '_' + profile.id),
      email: profile.email || provider + '_' + profile.id + '@placeholder.local',
      password: placeholderPassword,
      emailVerified: !!profile.emailVerified,
      oauthProviders: [{ provider, providerId: profile.id, avatar: profile.avatar }]
    });
    return user;
  }
  const exists = user.oauthProviders?.some(p => p.provider === provider && p.providerId === profile.id);
  if (!exists) {
    user.oauthProviders.push({ provider, providerId: profile.id, avatar: profile.avatar });
  }
  if (profile.emailVerified && !user.emailVerified) user.emailVerified = true;
  await user.save({ validateBeforeSave: false });
  return user;
}

function issueEphemeralCode(user) {
  const code = makeRandom(20);
  putWithTTL(codeStore, code, { userId: user._id.toString() }, EPHEMERAL_CODE_TTL_MS);
  return code;
}

exports.exchangeEphemeral = async (req, res, next) => {
  try {
    const { code } = req.query;
    if (!code) return next(new ErrorResponse('Missing code', 400));
    const payload = takeIfValid(codeStore, code);
    if (!payload) return next(new ErrorResponse('Invalid or expired code', 400));
    const user = await User.findById(payload.userId);
    if (!user) return next(new ErrorResponse('User not found', 404));
    _sendTokenResponse(user, 200, res, 'Login successful');
  } catch (err) { next(err); }
};

// ------------------ GOOGLE ------------------
exports.initGoogle = async (req, res) => {
  const state = createState();
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'consent',
    state
  });
  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`);
};

exports.callbackGoogle = async (req, res) => {
  const { code, state } = req.query;
  if (!validateState(state)) {
    return res.redirect(`${process.env.OAUTH_FAILURE_REDIRECT}?reason=state`);
  }
  try {
    const tokenRes = await axios.post('https://oauth2.googleapis.com/token', new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT,
      grant_type: 'authorization_code'
    }).toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

    const { access_token } = tokenRes.data;
    if (!access_token) throw new Error('Missing access_token');
    // Fetch profile with retry + dual endpoint fallback
    const fetchUserinfo = async () => {
      const endpoints = [
        'https://openidconnect.googleapis.com/v1/userinfo',
        'https://www.googleapis.com/oauth2/v3/userinfo'
      ];
      let lastErr;
      for (const ep of endpoints) {
        logger.info(`[oauth-google] attempting userinfo endpoint=${ep}`);
        for (let attempt = 1; attempt <= 3; attempt++) {
          try {
            const profileRes = await axios.get(ep, { headers: { Authorization: `Bearer ${access_token}` }, timeout: 4000 });
            if (attempt > 1) logger.warn(`[oauth-google] userinfo succeeded after retry attempt=${attempt} endpoint=${ep}`);
            return profileRes.data;
          } catch (e) {
            lastErr = e;
            const transient = ['ECONNRESET','ETIMEDOUT','EAI_AGAIN'].includes(e.code);
            logger.warn(`[oauth-google] userinfo attempt failed endpoint=${ep} attempt=${attempt} code=${e.code || ''} status=${e.response?.status || ''}`);
            if (!transient) break; // don't retry non-transient for this endpoint
            await new Promise(r => setTimeout(r, attempt * 300));
          }
        }
      }
      throw lastErr || new Error('Failed to fetch userinfo');
    };
    const p = await fetchUserinfo(); // sub, name, email, email_verified, picture
    const user = await linkOrCreateUser('google', {
      id: p.sub,
      email: p.email,
      emailVerified: p.email_verified,
      name: p.name,
      avatar: p.picture
    });
    const eph = issueEphemeralCode(user);
    res.redirect(`${process.env.OAUTH_SUCCESS_REDIRECT}?code=${eph}&provider=google`);
  } catch (err) {
    logger.error('[oauth-google] ' + err.message);
    const reason = /userinfo/i.test(err.message) || /EAI_AGAIN|ETIMEDOUT|ECONNRESET/.test(err.code || '') ? 'profile' : 'server';
    res.redirect(`${process.env.OAUTH_FAILURE_REDIRECT}?reason=${reason}`);
  }
};

// ------------------ GITHUB ------------------
exports.initGithub = async (req, res) => {
  const state = createState();
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: process.env.GITHUB_OAUTH_REDIRECT,
    scope: 'read:user user:email',
    state,
    allow_signup: 'true'
  });
  res.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
};

exports.callbackGithub = async (req, res) => {
  const { code, state } = req.query;
  if (!validateState(state)) {
    return res.redirect(`${process.env.OAUTH_FAILURE_REDIRECT}?reason=state`);
  }
  try {
    const tokenRes = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: process.env.GITHUB_OAUTH_REDIRECT,
      state
    }, { headers: { Accept: 'application/json' } });

    const accessToken = tokenRes.data.access_token;
    if (!accessToken) throw new Error('Missing access_token');

    const userRes = await axios.get('https://api.github.com/user', { headers: { Authorization: `Bearer ${accessToken}`, 'User-Agent': 'hannacode-app' } });
    let primaryEmail = null;
    try {
      const emailsRes = await axios.get('https://api.github.com/user/emails', { headers: { Authorization: `Bearer ${accessToken}`, 'User-Agent': 'hannacode-app' } });
      const primary = emailsRes.data.find(e => e.primary) || emailsRes.data.find(e => e.verified) || emailsRes.data[0];
      if (primary) primaryEmail = primary.email;
    } catch (e) { /* ignore if scope not granted */ }

    const gh = userRes.data; // id, login, avatar_url, name
    const user = await linkOrCreateUser('github', {
      id: String(gh.id),
      email: primaryEmail,
      emailVerified: true, // GitHub email list returns verified addresses
      name: gh.name || gh.login,
      avatar: gh.avatar_url
    });
    const eph = issueEphemeralCode(user);
    res.redirect(`${process.env.OAUTH_SUCCESS_REDIRECT}?code=${eph}&provider=github`);
  } catch (err) {
    logger.error('[oauth-github] ' + err.message);
    res.redirect(`${process.env.OAUTH_FAILURE_REDIRECT}?reason=server`);
  }
};

// Diagnostic (optional) – list active states/codes counts
exports._diagnostics = (req, res) => {
  res.json({ states: stateStore.size, codes: codeStore.size });
};
