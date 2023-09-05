import { removeTrailingSlashes } from './removeTrailingSlashes.ts';

describe('removeTrailingSlash', () => {
  const cases = [
    { x: '', expected: '' },
    { x: '/', expected: '' },
    { x: 'string', expected: 'string' },
    { x: 'string/', expected: 'string' },
    { x: 'string//', expected: 'string' },
    { x: '/string//', expected: '/string' },
    { x: 'https://domain.com/path/', expected: 'https://domain.com/path' },
    { x: 'https://domain.com/path//', expected: 'https://domain.com/path' },
  ];

  it.each(cases)(
    'should return $expected for $x as input',
    ({ x, expected }) => {
      expect(removeTrailingSlashes(x)).toBe(expected);
    },
  );
});
