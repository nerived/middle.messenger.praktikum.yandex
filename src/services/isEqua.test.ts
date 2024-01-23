import { expect } from 'chai';

import isEqual from './isEqual.ts';

describe('isEqual function', () => {
  it('should return true same value', () => {
    const a = { a: 1 };
    const b = { a: 1 };

    const result = isEqual(a, b);

    expect(result).to.equal(true);
  });

  it('should return true same reference', () => {
    const a = { a: 1 };
    const result = isEqual(a, a);

    expect(result).to.equal(true);
  });

  it('should return false diferent value', () => {
    const a = { a: 1 };
    const b = { a: 1, b: 2 };

    const result = isEqual(a, b);

    expect(result).to.equal(false);
  });
});
