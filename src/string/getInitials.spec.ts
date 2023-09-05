import { getInitials } from './getInitials.ts';

describe('getInitials', () => {
  const cases = [
    { x: '', expected: '?' },
    { x: ' ', expected: '?' },
    { x: ' ', fallback: 'fb', expected: 'fb' },
    { x: 'frontend', expected: 'F' },
    { x: 'frontend ', expected: 'F' },
    { x: 'frontend monsters', expected: 'FM' },
    { x: 'frontend monster rides a dinosaur in office', expected: 'FMRADIO' },
    { x: '2', expected: '2' },
    { x: '1 2 3 4', expected: '1234' },
    { x: 'x @# % * ))__() 1', expected: 'X@%*)1' },
  ];

  it.each(cases)(
    '($x, $fallback) -> $expected',
    ({ x, fallback, expected }) => {
      expect(getInitials(x, fallback)).toBe(expected);
    },
  );
});
