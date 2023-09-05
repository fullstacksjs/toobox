import { isTruthy } from './isTruthy.ts';

describe('isTruthy', () => {
  const cases = [
    { x: undefined, expected: false },
    { x: NaN, expected: false },
    { x: false, expected: false },
    { x: 0, expected: false },
    { x: null, expected: false },
    { x: 'null', expected: true },
    { x: 1, expected: true },
    { x: [], expected: true },
    { x: {}, expected: true },
  ];

  it.each(cases)('should return $expected for $x', ({ x, expected }) => {
    expect(isTruthy(x)).toBe(expected);
  });
});
