import { toCapitalCase } from './toCapitalCase.ts';

describe('toCapitalCase', () => {
  const cases = [
    { x: '', expected: '' },
    { x: ' ', expected: '' },
    { x: 'foo', expected: 'Foo' },
    { x: 'foo bar', expected: 'Foo Bar' },
    { x: 'foo-bar', expected: 'Foo Bar' },
    { x: 'fooBar', expected: 'Foo Bar' },
    { x: 'foo_bar', expected: 'Foo Bar' },
    { x: 'foo bar code', expected: 'Foo Bar Code' },
    { x: 'foo-bar-code', expected: 'Foo Bar Code' },
    { x: 'fooBarCode', expected: 'Foo Bar Code' },
    { x: 'foo_bar_code', expected: 'Foo Bar Code' },
    { x: 'FOO_BAR_CODE', expected: 'Foo Bar Code' },
    {
      x: 'ThisIs-fullstacksjs radio__and--I-loveCoding',
      expected: 'This Is Fullstacksjs Radio And I Love Coding',
    },
  ];

  it.each(cases)('$x -> $expected', ({ x, expected }) => {
    expect(toCapitalCase(x)).toBe(expected);
  });
});
