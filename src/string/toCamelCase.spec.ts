import { toCamelCase } from './toCamelCase.ts';

describe('toCamelCase', () => {
  const cases = [
    { x: '', expected: '' },
    { x: ' ', expected: '' },
    { x: 'foo', expected: 'foo' },
    { x: 'foo bar', expected: 'fooBar' },
    { x: 'foo-bar', expected: 'fooBar' },
    { x: 'fooBar', expected: 'fooBar' },
    { x: 'foo_bar', expected: 'fooBar' },
    { x: 'foo bar code', expected: 'fooBarCode' },
    { x: 'foo-bar-code', expected: 'fooBarCode' },
    { x: 'fooBarCode', expected: 'fooBarCode' },
    { x: 'foo_bar_code', expected: 'fooBarCode' },
    { x: 'FOO_BAR_CODE', expected: 'fooBarCode' },
    {
      x: 'ThisIs-fullstacksjs radio__and--I-loveCoding',
      expected: 'thisIsFullstacksjsRadioAndILoveCoding',
    },
  ];

  it.each(cases)('$x -> $expected', ({ x, expected }) => {
    expect(toCamelCase(x)).toBe(expected);
  });
});
