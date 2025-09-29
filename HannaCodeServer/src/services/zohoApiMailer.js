const axios = require('axios');
const logger = require('../utils/logger');
const { getZohoAccessToken } = require('./zohoToken');

/**
 * Send email via Zoho Mail API
 * Required env:
 *  ZOHO_ACCOUNT_ID  -> numeric or alphanumeric Zoho Mail account id (from API console)
 *  ZOHO_REGION      -> optional (us, eu, in, au, jp, ca). Default 'us'
 *  ZOHO_CLIENT_ID / ZOHO_CLIENT_SECRET / ZOHO_REFRESH_TOKEN (OAuth for token)
 *  FROM_EMAIL       -> sender email (must be verified in Zoho)
 */
function regionHost() {
  const region = (process.env.ZOHO_REGION || 'us').toLowerCase();
  const map = { us: 'mail.zoho.com', eu: 'mail.zoho.eu', in: 'mail.zoho.in', au: 'mail.zoho.com.au', jp: 'mail.zoho.jp', ca: 'mail.zoho.ca' };
  return map[region] || map.us;
}

function isConfigured() {
  return !!(process.env.ZOHO_ACCOUNT_ID && process.env.ZOHO_CLIENT_ID && process.env.ZOHO_CLIENT_SECRET && process.env.ZOHO_REFRESH_TOKEN && process.env.FROM_EMAIL);
}

async function sendViaZohoApi({ to, subject, html, text }) {
  if (!isConfigured()) {
    throw new Error('Zoho API not fully configured');
  }
  const accountId = process.env.ZOHO_ACCOUNT_ID;
  const host = regionHost();
  const url = `https://${host}/api/accounts/${accountId}/messages`;

  let token = await getZohoAccessToken();
  const payload = {
    fromAddress: process.env.FROM_EMAIL,
    toAddress: to,
    subject: subject || '',
    content: html || text || '',
    mailFormat: 'html',
    askReceipt: 'no'
  };

  try {
    const { data } = await axios.post(url, payload, {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json'
      },
      timeout: 15000
    });
    logger.info(`[mail-zoho-api] Sent to=${to} subject="${subject}" status=${data.status || 'ok'}`);
    return { channel: 'zoho-api', data };
  } catch (err) {
    // if token invalid retry once
    if (err.response && err.response.status === 401) {
      logger.warn('[mail-zoho-api] 401 unauthorized, refreshing token and retrying');
      token = await getZohoAccessToken(true);
      const { data } = await axios.post(url, payload, {
        headers: { Authorization: `Zoho-oauthtoken ${token}`, 'Content-Type': 'application/json' },
        timeout: 15000
      });
      logger.info(`[mail-zoho-api] Sent after refresh to=${to}`);
      return { channel: 'zoho-api', data };
    }
    logger.error(`[mail-zoho-api] Failed to send: ${err.message}`);
    throw err;
  }
}

module.exports = { sendViaZohoApi, isZohoApiConfigured: isConfigured };
