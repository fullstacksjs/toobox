import { removeLeadingSlashes } from './removeLeadingSlashes.ts';

describe('removeLeadingSlash', () => {
  const cases = [
    { x: '', expected: '' },
    { x: '/', expected: '' },
    { x: 'string', expected: 'string' },
    { x: '/string', expected: 'string' },
    { x: '//string', expected: 'string' },
    { x: '//string/', expected: 'string/' },
    { x: '//string/a', expected: 'string/a' },
  ];

  it.each(cases)(
    'should return $expected for $x as input',
    ({ x, expected }) => {
      expect(removeLeadingSlashes(x)).toBe(expected);
    },
  );
});
