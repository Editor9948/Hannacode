require('dotenv').config();
const { getCalendlyOrganization } = require('./services/calendlyService');

getCalendlyOrganization()
  .then(uri => console.log('Success:', uri))
  .catch(console.error);