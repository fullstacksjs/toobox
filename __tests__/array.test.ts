import { ensureArray, range, toArray } from '../src/array';

describe('array', () => {
  describe('ensureArray', () => {
    it('should wrap undefined value with an array', () => {
      expect(ensureArray(undefined)).toStrictEqual([undefined]);
    });

    it('should wrap null value with an array', () => {
      expect(ensureArray(null)).toStrictEqual([null]);
    });

    it('should wrap string value with an array', () => {
      expect(ensureArray('string')).toStrictEqual(['string']);
    });

    it('should wrap object with an array', () => {
      expect(ensureArray({ foo: 'bar' })).toStrictEqual([{ foo: 'bar' }]);
    });

    it("should return the argument if it's already an array", () => {
      expect(ensureArray(['array'])).toStrictEqual(['array']);
    });
  });

  describe('range', () => {
    it('should create an empty array for zero-length', () => {
      expect(range(0)).toStrictEqual([]);
    });

    it('should create an array of length n from zero-offset with a one-step', () => {
      expect(range(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should create an array with from specified offset', () => {
      expect(range(3, { offset: 5, step: 1 })).toStrictEqual([5, 6, 7]);
    });

    it('should create an array with specified offset and step', () => {
      expect(range(3, { offset: -2, step: 10 })).toStrictEqual([-2, 8, 18]);
    });
  });

  describe('toArray', () => {
    it('should return an empty array for null', () => {
      expect(toArray(null)).toStrictEqual([]);
    });

    it('should return an empty array for undefined', () => {
      expect(toArray(undefined)).toStrictEqual([]);
    });

    it('should wrap string value with an array', () => {
      expect(toArray('string')).toStrictEqual(['string']);
    });

    it("should return the argument if it's already an array", () => {
      expect(toArray(['array'])).toStrictEqual(['array']);
    });

    it('should spread iterables', () => {
      expect(
        toArray({
          *[Symbol.iterator]() {
            yield 'foo';
          },
        }),
      ).toStrictEqual(['foo']);
    });
  });
});
