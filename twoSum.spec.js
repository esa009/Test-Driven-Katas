const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('return an array', () => {
    const array = [1, 2, 3];
    expect(twoSum(array, 5)).to.equal(array);
  });
});
