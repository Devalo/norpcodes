## Search up Norwegian postal codes
---

### installation 
`npm install norpcodes`

Import the library into your JS file

`import norpcodes from 'norpcodes';
or
const norpcodes = require('norpcodes');`
---

### Usage:

To verify that the postal code is valid:
`norpcodes.validPostalCode('0001)`

To find the name/city the postal code belongs to:
`norpcodes.getPostalCodeName('0001)`

To find the county name the postal code belongs to:
`norpcodes.getPostalCodeCountyName('0001)`

To find the county code:
`norpcodes.getPostalCodeCountyNumber('0001)`

To find the county category:
`norpcodes.getPostalCodeCountyCategory('0001)`





