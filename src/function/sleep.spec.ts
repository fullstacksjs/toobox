import { sleep } from './sleep.ts';

describe('sleep', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(globalThis, 'setTimeout');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should call the inner timeout function', () => {
    sleep(1000);

    expect(globalThis.setTimeout).toHaveBeenCalledTimes(1);
  });

  it('should resolve after the timeout', async () => {
    const v = sleep(1000);
    vi.advanceTimersByTime(1000);

    await expect(v).resolves.toBeUndefined();
  });
});
