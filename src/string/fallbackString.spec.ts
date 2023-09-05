import { fallbackString } from './fallbackString.js';

describe('fallbackString', () => {
  const cases = [
    { x: '', defaultValue: 'd', expected: 'd' },
    { x: ' ', defaultValue: 'd', expected: ' ' },
    { x: 'x', defaultValue: 'd', expected: 'x' },
    { x: null, defaultValue: 'd', expected: 'd' },
    { x: undefined, defaultValue: 'd', expected: 'd' },
  ];

  it.each(cases)(
    '($x, $fallback) -> $expected',
    ({ expected, defaultValue, x }) => {
      expect(fallbackString(x, defaultValue)).toBe(expected);
    },
  );
});
