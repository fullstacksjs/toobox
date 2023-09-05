import {
  clearMocks,
  mockBunGlobal,
  mockDenoGlobal,
  mockWindowGlobal,
} from './fixtures';
import { isServer } from './isServer';

describe('isServer', () => {
  beforeEach(() => {
    clearMocks();
  });

  it('should return false in browser', () => {
    mockWindowGlobal();

    expect(isServer()).toBe(false);
  });

  it('should return true in bun', () => {
    mockBunGlobal();

    expect(isServer()).toBe(true);
  });

  it('should return true in node', () => {
    mockDenoGlobal();

    expect(isServer()).toBe(true);
  });

  it('should return true in deno', () => {
    mockDenoGlobal();

    expect(isServer()).toBe(true);
  });
});
