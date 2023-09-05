import { isNullOrEmptyArray } from './isNullOrEmptyArray.js';

describe('isNullOrEmptyArray', () => {
  const cases = [
    { x: null, expected: true },
    { x: undefined, expected: true },
    { x: [], expected: true },
    { x: [0], expected: false },
    { x: [,], expected: false },
    { x: [null], expected: false },
    { x: [undefined], expected: false },
  ];

  it.each(cases)('$x -> $expected', ({ x, expected }) => {
    expect(isNullOrEmptyArray(x)).toBe(expected);
  });
});
