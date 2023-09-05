import { isNull } from './isNull.ts';

describe('isNull', () => {
  const cases = [
    { x: undefined, expected: true },
    { x: null, expected: true },
    { x: 'null', expected: false },
    { x: 0, expected: false },
    { x: [], expected: false },
    { x: {}, expected: false },
    { x: false, expected: false },
  ];

  it.each(cases)('should return $expected for $x', ({ x, expected }) => {
    expect(isNull(x)).toBe(expected);
  });
});
