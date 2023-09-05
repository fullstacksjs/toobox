import { compact } from './compact.ts';

describe('compact', () => {
  it('should return empty array with an empty array as arg', () => {
    expect(compact([])).toEqual([]);
  });

  it('should return the same array when it does not contain nullish values', () => {
    expect(compact([1])).toEqual([1]);
  });

  it('should remove nullish values', () => {
    expect(compact([0, '', null, false, NaN, {}, undefined])).toEqual([
      0,
      '',
      false,
      NaN,
      {},
    ]);
  });
});
