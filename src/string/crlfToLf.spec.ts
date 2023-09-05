import { crlfToLf } from './crlfToLf.ts';

describe('crlfToLf', () => {
  const cases = [
    { x: '', expected: '' },
    { x: ' ', expected: ' ' },
    { x: 'hello world', expected: 'hello world' },
    { x: 'hello world\n', expected: 'hello world\n' },
    { x: 'hello world\r\n', expected: 'hello world\n' },
    { x: 'hello world\r\n\n', expected: 'hello world\n\n' },
    {
      x: 'hello world\r\nbut how is world\r\n',
      expected: 'hello world\nbut how is world\n',
    },
    { x: 'hello world\r', expected: 'hello world\r' },
    { x: 'hello world\r\r\r\n', expected: 'hello world\r\r\n' },
  ];

  it.each(cases)(
    'should return $expected for $x as input',
    ({ x, expected }) => {
      expect(crlfToLf(x)).toBe(expected);
    },
  );
});
