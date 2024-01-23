import { expect } from 'chai';

import merge from './merge.ts';

describe('merge function', () => {
  it('check merge object', () => {
    const a = { a: { b: { a: 2 } }, d: 5 };
    const b = { a: { b: { c: 1 } } };

    const expectObj = {
      a: {
        b: {
          a: 2,
          c: 1,
        },
      },
      d: 5,
    };

    const result = merge(a, b);

    expect(result).to.deep.equal(expectObj);
  });
});
