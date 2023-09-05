import { range } from './range.ts';

describe('range', () => {
  it('should create an empty array for zero-length', () => {
    expect(range(0)).toStrictEqual([]);
  });

  it('should create an array of length n from zero-offset with a one-step', () => {
    expect(range(5)).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it('should create an array with from specified offset', () => {
    expect(range(3, 5)).toStrictEqual([5, 6, 7]);
  });

  it('should create range with negative offset and positive step', () => {
    expect(range(3, -2, 10)).toStrictEqual([-2, 8, 18]);
  });

  it('should create range with positive offset and negative step', () => {
    expect(range(3, 2, -4)).toStrictEqual([2, -2, -6]);
  });

  it('should create range with negative offset and negative step', () => {
    expect(range(3, -2, -1)).toStrictEqual([-2, -3, -4]);
  });
});
