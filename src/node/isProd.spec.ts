import { isProd } from './isProd.ts';

describe('isProd', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it('should return false in production environment', () => {
    vi.stubEnv('NODE_ENV', 'development');

    expect(isProd()).toBe(false);
  });

  it('should return true in production environment', () => {
    vi.stubEnv('NODE_ENV', 'production');

    expect(isProd()).toBe(true);
  });

  it('should return false when environment is unset', () => {
    expect(isProd()).toBe(false);
  });
});
