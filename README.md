
# Search up Norwegian postal codes

## installation 
`npm install norpcodes`

`import norpcodes from 'norpcodes';` <br />
or if using CommonJS <br />
`const norpcodes = require('norpcodes');`



## Usage:

To verify that the postal code is valid:
`norpcodes.validPostalCode(0001)` // Pass in as number or string

To find the name/city the postal code belongs to:
`norpcodes.getPostalCodeName(0001)` // Pass in as number or string

To find the county name the postal code belongs to:
`norpcodes.getPostalCodeCountyName(0001)` // Pass in as number or string

To find the county code:
`norpcodes.getPostalCodeCountyNumber(0001)` // Pass in as number or string

To find the county category:
`norpcodes.getPostalCodeCountyCategory(0001)` // Pass in as number or string

To find all the postal codes for a specific location:
`norpcodes.getPostalCode('SEM')`


