import { not } from './not.ts';

describe('not', () => {
  it('should negate boolean', () => {
    const t = true;
    const f = false;

    expect(not(t)).toBe(false);
    expect(not(f)).toBe(true);
  });

  it('should return true for falsy values', () => {
    const falsies = [false, 0, '', undefined, null, NaN];
    const allTrue = falsies.map(() => true);

    expect(falsies.map(not)).toEqual(allTrue);
  });

  it('should return false for truthy values', () => {
    const trues = [true, 1, 'S', {}, [], () => void 0, Infinity, -Infinity];
    const allFalse = trues.map(() => false);

    expect(trues.map(not)).toEqual(allFalse);
  });
});
