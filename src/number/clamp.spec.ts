import { clamp } from './clamp.ts';

describe('clamp', () => {
  it('should clamp if value less than min', () => {
    expect(clamp(-10, 0, 100)).toBe(0);
  });

  it('should clamp if value more than max', () => {
    expect(clamp(101, 0, 100)).toBe(100);
  });

  it("should return the value if it's within range", () => {
    expect(clamp(5, 0, 100)).toBe(5);
  });
});
