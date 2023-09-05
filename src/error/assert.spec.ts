import { assert } from './assert.ts';

describe('assert', () => {
  it('should throw error when condition is false', () => {
    expect(() => assert(false, 'WTF')).toThrow('WTF');
  });

  it('should not throw error when condition is true', () => {
    expect(() => assert(true, 'WTF')).not.toThrow('WTF');
  });
});
