import { beforeEach, describe, expect, it } from 'vitest';
import {
  clearMocks,
  mockDenoGlobal,
  mockNodeGlobal,
  mockWindowGlobal,
} from './fixtures';
import { isNodeJS } from './isNodeJS';

describe('isNode', () => {
  beforeEach(() => {
    clearMocks();
  });

  it('should return false in browser', () => {
    mockWindowGlobal();

    expect(isNodeJS()).toBe(false);
  });

  it('should return true in node', () => {
    mockNodeGlobal();

    expect(isNodeJS()).toBe(true);
  });

  it('should return true in deno', () => {
    mockDenoGlobal();

    expect(isNodeJS()).toBe(false);
  });
});
