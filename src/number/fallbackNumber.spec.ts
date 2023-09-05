import { fallbackNumber } from './fallbackNumber.js';

describe('fallbackNumber', () => {
  const cases = [
    { x: 0, defaultValue: 1, expected: 0 },
    { x: null, defaultValue: 1, expected: 1 },
    { x: undefined, defaultValue: 1, expected: 1 },
    { x: Infinity, defaultValue: 1, expected: 1 },
    { x: -Infinity, defaultValue: 1, expected: 1 },
    { x: -0, defaultValue: 1, expected: -0 },
    { x: NaN, defaultValue: 1, expected: 1 },
    { x: -1, defaultValue: 1, expected: -1 },
    { x: 1, defaultValue: -1, expected: 1 },
  ];

  it.each(cases)(
    '($x, $fallback) -> $expected',
    ({ expected, defaultValue, x }) => {
      expect(fallbackNumber(x, defaultValue)).toBe(expected);
    },
  );
});
