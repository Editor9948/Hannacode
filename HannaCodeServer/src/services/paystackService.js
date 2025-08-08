const https = require('https');

// Simple Paystack API wrapper
const paystack = {
  transaction: {
    initialize: (data) => {
      return new Promise((resolve, reject) => {
        const params = JSON.stringify(data);
        
        const options = {
          hostname: 'api.paystack.co',
          port: 443,
          path: '/transaction/initialize',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(params)
          }
        };

        const req = https.request(options, (res) => {
          let data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });
          
          res.on('end', () => {
            try {
              const response = JSON.parse(data);
              if (response.status) {
                resolve(response);
              } else {
                reject(new Error(response.message));
              }
            } catch (error) {
              reject(error);
            }
          });
        });

        req.on('error', (error) => {
          reject(error);
        });

        req.write(params);
        req.end();
      });
    },

    verify: (reference) => {
      return new Promise((resolve, reject) => {
        const options = {
          hostname: 'api.paystack.co',
          port: 443,
          path: `/transaction/verify/${reference}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          }
        };

        const req = https.request(options, (res) => {
          let data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });
          
          res.on('end', () => {
            try {
              const response = JSON.parse(data);
              console.log("Raw Paystack verification response:", response);
              // Always resolve so we can handle the response in the controller
              resolve(response);
            } catch (error) {
              console.error("Failed to parse Paystack response:", data);
              reject(error);
            }
          });
        });

        req.on('error', (error) => {
          reject(error);
        });

        req.end();
      });
    }
  }
};

module.exports = paystack;
