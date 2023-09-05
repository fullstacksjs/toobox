import { isEmpty } from './isEmpty.ts';

describe('isEmpty', () => {
  const cases = [
    { arr: [], expected: true },
    { arr: [1], expected: false },
    { arr: [undefined], expected: false },
    { arr: [null], expected: false },
    { arr: [,], expected: false },
    { arr: [, null], expected: false },
    { arr: [, undefined], expected: false },
  ];

  it.each(cases)('%j', ({ expected, arr }) => {
    expect(isEmpty(arr)).toBe(expected);
  });
});
