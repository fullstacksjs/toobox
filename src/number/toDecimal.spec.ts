import { toDecimal } from './toDecimal.ts';

describe('toDecimal', () => {
  it('should convert the string to an integer', () => {
    expect(toDecimal('100')).toBe(100);
  });

  it('should truncate decimals', () => {
    expect(toDecimal('1.42')).toBe(1);
  });

  it('the default fallback should be NaN', () => {
    expect(toDecimal('S')).toBeNaN();
  });

  it('should return undefined if input is not a number and fallback is undefined', () => {
    expect(toDecimal('S', 10)).toBe(10);
  });

  it('should return nan if input is not a number and fallback is undefined', () => {
    expect(toDecimal('S', undefined)).toBeNaN();
  });
});
