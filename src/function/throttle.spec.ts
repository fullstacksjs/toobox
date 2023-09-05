import { throttle } from './throttle';

const oneSecond = 1000;

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should pass arguments to original callback', () => {
    const callback = vi.fn();

    const throttled = throttle({ delay: oneSecond }, callback);
    throttled(1, 2, 3);

    expect(callback).toHaveBeenCalledWith(1, 2, 3);
  });

  it('should execute callback once', () => {
    const callback = vi.fn();

    const throttled = throttle({ delay: oneSecond }, callback);
    throttled();
    throttled();
    throttled();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should execute callback again after delay', () => {
    const callback = vi.fn();

    const throttled = throttle({ delay: oneSecond }, callback);
    throttled();
    vi.advanceTimersByTime(1000);
    throttled();

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should not execute function within the delay time', () => {
    const callback = vi.fn();

    const throttled = throttle({ delay: oneSecond }, callback);
    throttled(1);
    throttled(2);
    vi.advanceTimersByTime(200);
    throttled(3);
    throttled(4);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not execute callback function when throttled function is never called', () => {
    const callback = vi.fn();

    throttle({ delay: oneSecond }, callback);

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
