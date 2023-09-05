import { comparePaths } from './comparePaths.ts';

describe('comparePaths', () => {
  it('should return 0 if paths are the same', () => {
    expect(comparePaths('/path1/', '/path1/')).toBe(0);
  });

  it('should return 1 if path1 is bigger', () => {
    expect(comparePaths('b', 'a')).toBe(1);
  });

  it('should return 1 if path1 is smaller', () => {
    expect(comparePaths('a', 'b')).toBe(-1);
  });

  it('should return 0 if path1 is equal to path2 but with different case', () => {
    expect(comparePaths('path', 'PAth')).toBe(0);
  });

  it('should return non-zero if path1 is equal to path2 but with different accent', () => {
    expect(comparePaths('reserve', 'réservé')).not.toBe(0);
  });

  it('should ignore trailing slashes', () => {
    expect(comparePaths('reserve', 'reserve//')).toBe(0);
    expect(comparePaths('reserve//', 'reserve/')).toBe(0);
  });

  it('should ignore leading slashes', () => {
    expect(comparePaths('//reserve', 'reserve')).toBe(0);
    expect(comparePaths('/reserve', '//reserve')).toBe(0);
  });
});
