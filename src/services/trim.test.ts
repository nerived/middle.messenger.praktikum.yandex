import { expect } from 'chai';
import { trim } from './trim.ts';

describe('trim function', () => {
  it('case 1', () => {
    const testString = '  abc  ';
    const expectedResult = 'abc';

    expect(trim(testString)).to.equal(expectedResult);
  });

  it('case 2', () => {
    const testString = '-_-abc-_-';
    const testPatern = '_-';

    const expectedResult = 'abc';

    expect(trim(testString, testPatern)).to.equal(expectedResult);
  });

  it('case 3', () => {
    const testString = '\xA0foo';

    const expectedResult = 'foo';

    expect(trim(testString)).to.equal(expectedResult);
  });

  it('case 4', () => {
    const testString = '-_-ab c -_-';
    const testPatern = '_-';

    const expectedResult = 'ab c ';

    expect(trim(testString, testPatern)).to.equal(expectedResult);
  });
});
