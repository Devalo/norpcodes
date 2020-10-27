const postCodes = require('./resources/postalcodes.json');

exports.validPostalCode = function(code) {
  const areaLocation = postCodes[code];
  if (areaLocation) return true;
}

exports.getPostalCodeName = function(code) {
  const areaLocation = postCodes[code];
  if (areaLocation) {
    return areaLocation.poststed;
  } 
}

exports.getPostalCodeCountyName = function(code) {
  const areaLocation = postCodes[code];
  if (areaLocation) {
    return areaLocation.kommunenavn;
  } 
}

exports.getPostalCodeCountyNumber = function(code) {
  const areaLocation = postCodes[code];
  if (areaLocation) {
    return areaLocation.kommunenummer;
  } 
}

exports.getPostalCodeCategory = function(code) {
  const areaLocation = postCodes[code];
  if (areaLocation) {
    return areaLocation.kategori;
  } 
}

exports.getPostalCode = function(location) {
  const numContainer = [];
  if (postCodes) {
    for (let i in postCodes) {
      if (location.toUpperCase() === postCodes[i].poststed) {
        numContainer.push(i);
      }
    }
    return numContainer;
  } 
}
