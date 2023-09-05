import {
  clearMocks,
  mockDenoGlobal,
  mockBunGlobal,
  mockNodeGlobal,
  mockWindowGlobal,
} from './fixtures';
import { isBun } from './isBun';

describe('isBun', () => {
  beforeEach(() => {
    clearMocks();
  });

  it('should return false in browser', () => {
    mockWindowGlobal();

    expect(isBun()).toBe(false);
  });

  it('should return true in node', () => {
    mockNodeGlobal();

    expect(isBun()).toBe(false);
  });

  it('should return true in bun', () => {
    mockBunGlobal();

    expect(isBun()).toBe(true);
  });

  it('should return true in deno', () => {
    mockDenoGlobal();

    expect(isBun()).toBe(false);
  });
});
