import { isBoolean } from './isBoolean.ts';

describe('isBoolean', () => {
  const cases = [
    { x: true, expected: true },
    { x: false, expected: true },
    { x: '', expected: false },
    { x: undefined, expected: false },
    { x: null, expected: false },
    { x: 1, expected: false },
    { x: ['1'], expected: false },
  ];

  it.each(cases)('should return $expected for $x', ({ x, expected }) => {
    expect(isBoolean(x)).toBe(expected);
  });
});
