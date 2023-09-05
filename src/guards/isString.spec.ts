import { isString } from './isString.ts';

describe('isString', () => {
  const cases = [
    { x: '', expected: true },
    { x: undefined, expected: false },
    { x: null, expected: false },
    { x: 1, expected: false },
    { x: ['1'], expected: false },
  ];

  it.each(cases)('should return $expected for $x', ({ x, expected }) => {
    expect(isString(x)).toBe(expected);
  });
});
