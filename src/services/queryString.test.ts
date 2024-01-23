import { expect } from 'chai';

import queryString from './queryString.ts';

describe('queryString function', () => {
  it('check prepare data', () => {
    const obj = {
      key: 1,
      key2: 'test',
      key3: false,
      key4: true,
      key5: [1, 2, 3],
      key6: { a: 1 },
      key7: { b: { d: 2 } },
    };

    expect(queryString(obj)).to.equal(
      'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'
    );
  });
});
