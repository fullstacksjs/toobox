import { describe, it, vi, expect } from 'vitest';
import { asyncTryCatch } from './asyncTryCatch';

describe('Async try catch', () => {
  it('should call the passed function to it', async () => {
    const execute = vi.fn();
    await asyncTryCatch(execute, () => 0);

    expect(execute).toBeCalled();
  });

  it('should return the function return value', async () => {
    const execute = () => Promise.resolve(1);
    const value = await asyncTryCatch(execute, () => 0);

    expect(value).toBe(1);
  });

  it('should call the error handler with error', async () => {
    const handler = vi.fn();
    const execute = () =>
      new Promise((_resolve, reject) => {
        reject('custom error message');
      });
    await asyncTryCatch(execute, handler);

    expect(handler).toBeCalledWith('custom error message');
  });

  it('should return the handler return value if there is an error', async () => {
    const handler = vi.fn(() => 'handled error');
    const execute = () =>
      new Promise((_resolve, reject) => {
        reject('custom error message');
      });
    const parsedError = await asyncTryCatch(execute, handler);

    expect(parsedError).toBe('handled error');
  });
});
