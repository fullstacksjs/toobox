import { shuffle } from './shuffle.ts';
import { range } from './range.ts';

describe('shuffle', () => {
  it('should return an empty array for empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('should return the same array when array has only one item', () => {
    expect(shuffle([1])).toEqual([1]);
  });

  it('should return array with the same items', () => {
    const arr = [1, 2, 3];

    expect(shuffle(arr)).toEqual(expect.arrayContaining(arr));
  });

  it('should return shuffled version of array', () => {
    const arr = range(501);

    // NOTE: This assertion has ~1.0E-164% probability of false negative.
    expect(shuffle(arr)).not.toEqual(arr);
  });
});
