import { toSnakeCase } from './toSnakeCase.ts';

describe('toSnakeCase', () => {
  const cases = [
    { x: '', expected: '' },
    { x: ' ', expected: '' },
    { x: 'foo', expected: 'foo' },
    { x: 'foo bar', expected: 'foo_bar' },
    { x: 'foo-bar', expected: 'foo_bar' },
    { x: 'fooBar', expected: 'foo_bar' },
    { x: 'foo_bar', expected: 'foo_bar' },
    { x: 'foo bar code', expected: 'foo_bar_code' },
    { x: 'foo-bar-code', expected: 'foo_bar_code' },
    { x: 'fooBarCode', expected: 'foo_bar_code' },
    { x: 'foo_bar_code', expected: 'foo_bar_code' },
    { x: 'FOO_BAR_CODE', expected: 'foo_bar_code' },
    {
      x: 'ThisIs-fullstacksjs radio__and--I-loveCoding',
      expected: 'this_is_fullstacksjs_radio_and_i_love_coding',
    },
  ];

  it.each(cases)('$x -> $expected', ({ x, expected }) => {
    expect(toSnakeCase(x)).toBe(expected);
  });
});
