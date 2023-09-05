import { uniq } from './uniq';

describe('uniq', () => {
  it('should not mutate original array', () => {
    const arr = [1, 2];

    expect(uniq(arr)).not.toBe(arr);
  });

  it('should remove duplicates', () => {
    const arr = [1, 2, 2, 3, 4, 5, 5];
    const expected = [1, 2, 3, 4, 5];

    expect(uniq(arr)).toEqual(expected);
  });

  it('should not mark elements as equal if their references are not equal, regardless of deep equality', () => {
    const arr = [{ key: 'value' }, { key: 'value' }, [1, 2], [1, 2]];
    const notExpected = [{ key: 'value' }, [1, 2]];

    expect(uniq(arr)).not.toEqual(notExpected);
  });

  it('should not change reference of array elements', () => {
    const input = [{ key: 'value' }];

    expect(uniq(input)[0]).toBe(input[0]);
  });

  it('should remove elements with duplicate references', () => {
    const object = { key: 'value' };
    const arr = [object, object];
    const expected = [object];

    expect(uniq(arr)).toEqual(expected);
  });

  it('should consider null and undefined as distinct values', () => {
    const input = [null, undefined];

    expect(uniq(input)).toEqual([null, undefined]);
  });

  it('should return [] when arg is an empty array', () => {
    expect(uniq([])).toEqual([]);
  });
});
