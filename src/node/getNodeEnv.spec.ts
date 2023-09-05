import { getNodeEnv } from './getNodeEnv.ts';

describe('getNodeEnv', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it('should return development when the NODE_ENV is development', () => {
    vi.stubEnv('NODE_ENV', 'development');

    expect(getNodeEnv()).toBe('development');
  });

  it('should return production when the NODE_ENV is production', () => {
    vi.stubEnv('NODE_ENV', 'production');

    expect(getNodeEnv()).toBe('production');
  });

  it('should return undefined when the NODE_ENV is undefined', () => {
    vi.stubEnv('NODE_ENV', '');

    expect(getNodeEnv()).toBeUndefined();
  });

  it('should return fallback when the NODE_ENV is undefined', () => {
    vi.stubEnv('NODE_ENV', '');

    expect(getNodeEnv('fallback')).toBe('fallback');
  });

  it('should not return fallback when the NODE_ENV is not undefined', () => {
    vi.stubEnv('NODE_ENV', 'test');

    expect(getNodeEnv('fallback')).toBe('test');
  });
});
