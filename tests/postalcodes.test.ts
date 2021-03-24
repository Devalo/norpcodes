// test suites with JEST

import norpcodes from '../index';

describe('validPostalCode', () => {
  it('returns true if postal code exists', () => {
    expect(norpcodes.validPostalCode('3170')).toBe(true);
  });
  it('returns undefined if postalcode does not exist', () => {
    expect(norpcodes.validPostalCode('0')).toBe(undefined);
  });
});

describe('getPostalCodeName', () => {
  it('it returnes name of postalCode', () => {
    expect(norpcodes.getPostalCodeName('3170')).toBe('SEM');
  });
  it('else returns undefined', () => {
    expect(norpcodes.getPostalCodeName('0')).toBe(undefined);
  });
});

describe('getPostalCodeCountyName', () => {
  it('it returnes county name of postalCode', () => {
    expect(norpcodes.getPostalCodeCountyName('3170')).toBe('TØNSBERG');
  });
  it('else returns undefined', () => {
    expect(norpcodes.getPostalCodeCountyName('0')).toBe(undefined);
  });
});

describe('getPostalCodeCountyName', () => {
  it('it returnes county number  of postalCode', () => {
    expect(norpcodes.getPostalCodeCountyNumber('3170')).toBe('0704');
  });
  it('else returns undefined', () => {
    expect(norpcodes.getPostalCodeCountyName('0')).toBe(undefined);
  });
});

describe('getPostalCodeCountyCategory', () => {
  it('it returns county category of postalCode', () => {
    expect(norpcodes.getPostalCodeCategory('3170')).toBe('G');
  });
  it('else returns undefined', () => {
    expect(norpcodes.getPostalCodeCategory('0')).toBe(undefined);
  });
});

describe('getPostalCode', () => {
  it('it returns the postal code(s) of the location', () => {
    expect(norpcodes.getPostalCode('SEM')).toContain('3170');
  });
  it('receives even if lower case', () => {
    expect(norpcodes.getPostalCode('sem')).toContain('3170');
  });
  it('else returns undefined', () => {
    expect(norpcodes.getPostalCode('BLERP')).toHaveLength(0);
  });
});


