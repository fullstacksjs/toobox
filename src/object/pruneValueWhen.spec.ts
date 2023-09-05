import { pruneValueWhen } from './pruneValueWhen.ts';

describe('pruneValueWhen', () => {
  it('should return empty object', () => {
    expect(
      pruneValueWhen({ a: null, b: '', c: undefined }, value => !value),
    ).toEqual({});
  });

  it("should return object with just one property 'name'", () => {
    expect(
      pruneValueWhen(
        { a: 'John', b: null, c: '', d: undefined },
        value => !value,
      ),
    ).toEqual({ a: 'John' });
  });

  it('should not prune nested object', () => {
    expect(pruneValueWhen({ a: { b: null } }, value => !value)).toEqual({
      a: { b: null },
    });
  });
});
