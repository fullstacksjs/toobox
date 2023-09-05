import { concatArrays } from './concatArrays.ts';

describe('concatArrays', () => {
  it('should return empty array with no argument', () => {
    expect(concatArrays()).toEqual([]);
  });

  it('should return empty array with undefined argument', () => {
    expect(concatArrays(undefined)).toEqual([]);
  });

  it('should return empty array with multiple undefined, null argument', () => {
    expect(concatArrays(null, undefined)).toEqual([]);
  });

  it('should return empty array with empty array as argument', () => {
    expect(concatArrays([])).toEqual([]);
  });

  it('should return array with if pass undefined before and after it', () => {
    expect(concatArrays(undefined, [1, 2], null)).toEqual([1, 2]);
  });

  it('should merge multiple arrays even with some undefined arguments', () => {
    expect(concatArrays(undefined, [1, 2], null, [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should merge multiple arrays', () => {
    expect(concatArrays([1, 2], ['3', '4'])).toEqual([1, 2, '3', '4']);
  });

  it('should act as identity for single array argument', () => {
    expect(concatArrays([1, 2])).toEqual([1, 2]);
  });
});
