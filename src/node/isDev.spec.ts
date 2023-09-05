import { isDev } from './isDev.ts';

describe('isDev', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it('should return true in development environment', () => {
    vi.stubEnv('NODE_ENV', 'development');

    expect(isDev()).toBe(true);
  });

  it('should return true in dev environment', () => {
    vi.stubEnv('NODE_ENV', 'production');

    expect(isDev()).toBe(false);
  });

  it('should return false when environment is unset', () => {
    expect(isDev()).toBe(false);
  });
});
