import { describe, it, vi, expect } from 'vitest';
import { asyncNullableTryCatch } from './asyncNullableTryCatch';

describe('Nullable async try catch', () => {
  it('should call the passed function to it', async () => {
    const execute = vi.fn();
    await asyncNullableTryCatch(execute);

    expect(execute).toBeCalled();
  });

  it('should return the function return value', async () => {
    const execute = () => Promise.resolve(1);
    const value = await asyncNullableTryCatch(execute);

    expect(value).toBe(1);
  });

  it('should return null if there is an error', async () => {
    const execute = () =>
      new Promise((_resolve, reject) => {
        reject('custom error message');
      });

    expect(await asyncNullableTryCatch(execute)).toBeNull();
  });
});
