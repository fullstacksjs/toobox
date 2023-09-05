import { isFunction } from './isFunction.ts';

describe('isFunction', () => {
  it('should return false for undefined', () => {
    expect(isFunction(undefined)).toBe(false);
  });

  it('should return false for boolean', () => {
    expect(isFunction(true)).toBe(false);
  });

  it('should return false for string', () => {
    expect(isFunction('string')).toBe(false);
  });

  it('should return true for function', () => {
    expect(isFunction(() => 1)).toBe(true);
  });
});
