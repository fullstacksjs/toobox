import { escapeRegex } from './escapeRegex.ts';

describe('escapeRegex', () => {
  it('should escape all especial characters', () => {
    expect(new RegExp(escapeRegex('^[](){}$')).test('^[](){}$')).toBe(true);
    expect(new RegExp(escapeRegex('^a$')).test('a')).toBe(false);
  });
});
