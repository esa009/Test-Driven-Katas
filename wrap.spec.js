const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns the same string that was provided', () => {
      const names = 'Almendra and Keyairra';
      expect(wrap(names, 25)).to.equal(names);
  });

  it('Returns the same string with break lines', () => {
      const places = 'Queens and Bridgeport';
      expect(wrap(places, 11)).to.equal('Queens and\nBridgeport');//did count the space between 'and' and 'Bridgeport' as a character becasue next line doesn't need a space before 'Bridgeport"
  });
});
