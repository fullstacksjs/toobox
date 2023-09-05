import { testRegex } from './testRegex.ts';

describe('testRegex', () => {
  it('should return true when regex is found', () => {
    const regex = /a/g;

    expect(testRegex(regex, 'a')).toBe(true);
  });

  it('should return false when regex is not found', () => {
    const regex = /a/g;

    expect(testRegex(regex, 'b')).toBe(false);
  });

  it('should return return true if call twice with the same regex', () => {
    const regex = /a/g;

    expect(testRegex(regex, 'a')).toBe(true);
    expect(testRegex(regex, 'a')).toBe(true);
  });

  it('should return keep lastIndex to 0', () => {
    const regex = /a/g;

    expect(testRegex(regex, 'a')).toBe(true);
    expect(regex.lastIndex).toBe(0);
  });

  it('should return true even if last index has already changed', () => {
    const regex = /a/g;
    regex.test('aa');

    expect(regex.lastIndex).toBe(1);

    regex.test('aa');

    expect(regex.lastIndex).toBe(2);
    expect(testRegex(regex, 'a')).toBe(true);
    expect(regex.lastIndex).toBe(0);
  });
});
