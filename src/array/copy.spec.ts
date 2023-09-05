import { copy } from './copy.ts';

describe('copyArray', () => {
  it('return value should be a new array', () => {
    const array = [1];
    const copied = copy(array);
    copied[0]++;

    expect(array[0]).toBe(1);
    expect(copied[0]).toBe(2);
  });

  it('should return same array', () => {
    const array = [1];
    const copied = copy(array);

    expect(array).toEqual(copied);
  });
});
