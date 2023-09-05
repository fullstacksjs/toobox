import { toPascalCase } from './toPascalCase.ts';

describe('toPascalCase', () => {
  const cases = [
    { x: '', expected: '' },
    { x: ' ', expected: '' },
    { x: 'foo', expected: 'Foo' },
    { x: 'foo bar', expected: 'FooBar' },
    { x: 'foo-bar', expected: 'FooBar' },
    { x: 'fooBar', expected: 'FooBar' },
    { x: 'foo_bar', expected: 'FooBar' },
    { x: 'foo bar code', expected: 'FooBarCode' },
    { x: 'foo-bar-code', expected: 'FooBarCode' },
    { x: 'fooBarCode', expected: 'FooBarCode' },
    { x: 'foo_bar_code', expected: 'FooBarCode' },
    { x: 'FOO_BAR_CODE', expected: 'FooBarCode' },
    { x: 'foo_ -BaRC ode', expected: 'FooBaRcOde' },
    {
      x: 'ThisIs-fullstacksjs radio__and--I-loveCoding',
      expected: 'ThisIsFullstacksjsRadioAndILoveCoding',
    },
  ];

  it.each(cases)('$x -> $expected', ({ x, expected }) => {
    expect(toPascalCase(x)).toBe(expected);
  });
});
