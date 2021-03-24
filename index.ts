import * as postCodesRaw from './resources/postalcodes.json';

type Tcode = number | string;

const postCodes: any = postCodesRaw;

const validPostalCode = (code: Tcode): true | undefined => {
  const areaLocation = postCodes[code];
  if (areaLocation) return true;
}

const getPostalCodeName = (code: Tcode): string | undefined  => {
  const areaLocation = postCodes[code];
  if (areaLocation) {
    return areaLocation.poststed;
  } 
  return 
}

const getPostalCodeCountyName = (code: Tcode): string | undefined => {
  const areaLocation = postCodes[code];
  if (areaLocation) {
    return areaLocation.kommunenavn;
  } 
}

const getPostalCodeCountyNumber = (code: Tcode): string | undefined => {
  const areaLocation = postCodes[code];
  if (areaLocation) {
    return areaLocation.kommunenummer;
  } 
}

const getPostalCodeCategory = (code: Tcode): string | undefined => {
  const areaLocation = postCodes[code];
  if (areaLocation) {
    return areaLocation.kategori;
  } 
}

const getPostalCode = (location: string): string[] | undefined => {
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

export default {
  validPostalCode,
  getPostalCodeName,
  getPostalCodeCountyName,
  getPostalCodeCountyNumber,
  getPostalCodeCategory,
  getPostalCode,
}
