import { divide } from './divide.ts';

describe('divide', () => {
  it('should return the division of two number', () => {
    expect(divide(4, 2)).toBe(2);
  });

  it('should return fallback when the divisor is zero', () => {
    expect(divide(4, 0, 42)).toBe(42);
  });

  it('the default fallback should be nan', () => {
    expect(divide(4, 0)).toBeNaN();
  });
});
