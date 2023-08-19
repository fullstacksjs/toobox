import { describe, it, vi, expect } from 'vitest';
import { nullableTryCatch } from './nullableTryCatch';

describe('Try catch', () => {
  it('should call the passed function to it', () => {
    const execute = vi.fn();
    nullableTryCatch(execute);

    expect(execute).toBeCalled();
  });

  it('should return the function return value', () => {
    const execute = () => 1;
    const value = nullableTryCatch(execute);

    expect(value).toBe(1);
  });

  it('should return null on error', () => {
    const execute = () => {
      throw '';
    };

    expect(nullableTryCatch(execute)).toBeNull();
  });

  it('should return the handler return value if there is an error', () => {
    const execute = () => {
      throw 'custom error message';
    };

    const parsedError = nullableTryCatch(execute);

    expect(parsedError).toBe('handled error');
  });
});
