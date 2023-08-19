import { describe, it, vi, expect } from 'vitest';
import { nullableTryCatch } from './nullableTryCatch';

describe('Nullable try catch', () => {
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
});
