import { percent } from './percent.ts';

describe('percent', () => {
  const cases = [
    { min: 0, max: 10, expected: 0 },
    { min: 1, max: 10, expected: 10 },
    { min: 1, max: 3, expected: 33.33333333333333 },
    { min: -1, max: 10, expected: 0 },
    { min: 20, max: 10, expected: 100 },
    { min: NaN, max: 10, expected: 0 },
    { min: 10, max: NaN, expected: 0 },
  ];

  it.each(cases)('$min % $max -> $expected', ({ min, max, expected }) => {
    expect(percent(min, max)).toBe(expected);
  });
});
