const postalCodes = require('./lib/processPostalCodes');

exports.validPostalCode = function(code) {
  const areaLocation = postalCodes[code];
  if (areaLocation) return true;
}

exports.getPostalCodeName = function(code) {
  const areaLocation = postalCodes[code];
  if (areaLocation) {
    return areaLocation.poststed;
  } 
}

exports.getPostalCodeCountyName = function(code) {
  const areaLocation = postalCodes[code];
  if (areaLocation) {
    return areaLocation.kommunenavn;
  } 
}

exports.getPostalCodeCountyNumber = function(code) {
  const areaLocation = postalCodes[code];
  if (areaLocation) {
    return areaLocation.kommunenummer;
  } 
}

exports.getPostalCodeCategory = function(code) {
  const areaLocation = postalCodes[code];
  if (areaLocation) {
    return areaLocation.kategori;
  } 
}

exports.getPostalCode = function(location) {
  const numContainer = [];
  if (postalCodes) {
    for (let i in postalCodes) {
      if (location.toUpperCase() === postalCodes[i].poststed) {
        numContainer.push(i);
      }
    }
    return numContainer;
  } 
}
