const axios = require('axios');
const logger = require('../utils/logger');

/**
 * Zoho OAuth2 token manager
 * Requires env:
 *  ZOHO_CLIENT_ID
 *  ZOHO_CLIENT_SECRET
 *  ZOHO_REFRESH_TOKEN
 *  ZOHO_ACCOUNTS_DOMAIN (optional, default: accounts.zoho.com) e.g. accounts.zoho.eu
 */
let cached = { accessToken: null, expiry: 0 };
const EARLY_REFRESH_SECONDS = 60; // refresh 1 min early

function getAccountsDomain() {
  return process.env.ZOHO_ACCOUNTS_DOMAIN || 'accounts.zoho.com';
}

function isValid() {
  return !!cached.accessToken && Date.now() < (cached.expiry - EARLY_REFRESH_SECONDS * 1000);
}

async function refreshToken() {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Zoho OAuth env vars missing (need ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN)');
  }
  const domain = getAccountsDomain();
  const url = `https://${domain}/oauth/v2/token`;
  try {
    const params = new URLSearchParams({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token'
    });
    const { data } = await axios.post(url, params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    if (!data.access_token || !data.expires_in) {
      throw new Error('Invalid token response from Zoho');
    }
    cached.accessToken = data.access_token;
    cached.expiry = Date.now() + (Number(data.expires_in) * 1000);
    logger.info('[zoho-oauth] Access token refreshed');
    return cached.accessToken;
  } catch (err) {
    logger.error(`[zoho-oauth] Refresh failed: ${err.message}`);
    throw err;
  }
}

async function getZohoAccessToken(force = false) {
  if (!force && isValid()) return cached.accessToken;
  return refreshToken();
}

module.exports = { getZohoAccessToken, _zohoTokenCache: cached };
