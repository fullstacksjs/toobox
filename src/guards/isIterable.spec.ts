import { isIterable } from './isIterable.ts';

describe('isIterable', () => {
  it('should return false for undefined', () => {
    expect(isIterable(undefined)).toBe(false);
  });

  it('should return true for array', () => {
    expect(isIterable([])).toBe(true);
  });

  it('should return true for Map', () => {
    expect(isIterable(new Map())).toBe(true);
  });

  it('should return true for user-defined iterables', () => {
    expect(
      isIterable({
        *[Symbol.iterator]() {
          yield 'foo';
        },
      }),
    ).toBe(true);
  });

  it('should return true for string', () => {
    expect(isIterable('some')).toBe(true);
  });

  it('should return false for object', () => {
    expect(isIterable({})).toBe(false);
  });
});
