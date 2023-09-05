import { assertNotNull } from './assertNotNull.ts';

describe('assertNotNull', () => {
  it('should throw error when condition is null', () => {
    expect(() => assertNotNull(null, 'WTF')).toThrow('WTF');
  });

  it('should throw error when condition is undefined', () => {
    expect(() => assertNotNull(undefined, 'WTF')).toThrow('WTF');
  });

  it('should not throw error when condition is not null', () => {
    expect(() => assertNotNull(0)).not.toThrow();
  });
});
