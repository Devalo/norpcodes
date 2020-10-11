
/* eslint-disable consistent-return */
const fs = require('fs');
const path = require('path');

// Process and return JS object with postal codes
const postalJSON = fs.readFileSync(path.join(__dirname, '../resources/postalcodes.json'));
const postalCodes = JSON.parse(postalJSON);

module.exports = postalCodes;

