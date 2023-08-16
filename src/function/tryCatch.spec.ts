import { describe, it, vi, expect } from 'vitest';
import { tryCatch } from './tryCatch';

describe('Try catch', () => {
  it('should call the passed function to it', () => {
    const execute = vi.fn();
    tryCatch(execute, () => 0);

    expect(execute).toBeCalled();
  });

  it('should return the function return value', () => {
    const execute = () => 1;
    const value = tryCatch(execute, () => 0);

    expect(value).toBe(1);
  });

  it('should call the error handler with error', () => {
    const handler = vi.fn();

    const execute = () => {
      throw 'custom error message';
    };
    tryCatch(execute, handler);

    expect(handler).toBeCalledWith('custom error message');
  });

  it('should return the handler return value if there is an error', () => {
    const handler = vi.fn(() => 'handled error');

    const execute = () => {
      throw 'custom error message';
    };

    const parsedError = tryCatch(execute, handler);

    expect(parsedError).toBe('handled error');
  });
});
