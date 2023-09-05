import { ensureArray } from './ensureArray.ts';

describe('ensureArray', () => {
  it(`should return [undefined] when arg is undefined array`, () => {
    expect(ensureArray(undefined)).toStrictEqual([undefined]);
  });

  it(`should return [null] when arg is null array`, () => {
    expect(ensureArray(null)).toStrictEqual([null]);
  });

  it(`should return the ["foo"] when arg is "foo" array`, () => {
    expect(ensureArray('foo')).toStrictEqual(['foo']);
  });

  it("should return the argument if it's already an array", () => {
    expect(ensureArray(['array'])).toStrictEqual(['array']);
  });
});
