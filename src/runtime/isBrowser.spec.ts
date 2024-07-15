import {afterEach, describe, expect, it} from 'vitest';
import {
  clearMocks,
  mockDenoGlobal,
  mockNodeGlobal,
  mockWindowGlobal,
} from './fixtures';
import {isBrowser} from './isBrowser';

describe('isBrowser', () => {
  afterEach(() => {
    clearMocks();
  });

  it('should return true in browser', () => {
    mockWindowGlobal();

    expect(isBrowser()).toBe(true);
  });

  it('should return false in node', () => {
    mockNodeGlobal();

    expect(isBrowser()).toBe(false);
  });

  it('should return false in Deno', () => {
    mockDenoGlobal();

    expect(isBrowser()).toBe(false);
  });
});
