import { pruneKeyWhen } from './pruneKeyWhen.ts';

describe('pruneKeyWhen', () => {
  it('should return empty object', () => {
    expect(pruneKeyWhen({ a: null, b: '' }, key => key === 'b')).toEqual({
      a: null,
    });
  });

  it("should return object with just one property 'name'", () => {
    expect(pruneKeyWhen({ a: 'John', b: {} }, () => true)).toEqual({});
  });

  it('should not prune nested object', () => {
    expect(pruneKeyWhen({ a: { b: null } }, () => false)).toEqual({
      a: { b: null },
    });
  });
});
