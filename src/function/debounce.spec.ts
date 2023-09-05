import { debounce } from './debounce';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should execute the function with the same arguments passed to it', () => {
    const execute = vi.fn((_a: any, _b: any) => 0);
    const debouncedFunction = debounce(
      { delay: 1000, immediate: false },
      execute,
    );
    debouncedFunction(1, 2);
    vi.advanceTimersByTime(1000);

    expect(execute).toHaveBeenCalledWith(1, 2);
  });

  it('should execute once after the delay', () => {
    const execute = vi.fn();

    const debouncedFunction = debounce({ delay: 1000 }, execute);
    debouncedFunction();
    vi.advanceTimersByTime(1000);

    expect(execute).toHaveBeenCalledTimes(1);
  });

  it('should not execute before the delay', () => {
    const execute = vi.fn();

    const debouncedFunction = debounce({ delay: 1000 }, execute);
    debouncedFunction();
    vi.advanceTimersByTime(500);

    expect(execute).toHaveBeenCalledTimes(0);
  });

  it('should execute once after the last call with delay', () => {
    const execute = vi.fn();

    const debouncedFunction = debounce({ delay: 1000 }, execute);

    for (let i = 0; i < 10; i++) {
      debouncedFunction();
      vi.advanceTimersByTime(500);
    }
    vi.advanceTimersByTime(500);

    expect(execute).toHaveBeenCalledTimes(1);
  });

  it('should execute whenever not called within the delay period', () => {
    const execute = vi.fn();

    const debouncedFunction = debounce({ delay: 1000 }, execute);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
        debouncedFunction();
        vi.advanceTimersByTime(500);
      }
      vi.advanceTimersByTime(500);
    }

    expect(execute).toHaveBeenCalledTimes(5);
  });

  it('should execute immediately', () => {
    const execute = vi.fn();

    const debouncedFunction = debounce(
      { delay: 1000, immediate: true },
      execute,
    );
    debouncedFunction();

    expect(execute).toHaveBeenCalledTimes(1);
  });

  it('should not execute after the delay if immediate is true', () => {
    const execute = vi.fn();

    const debouncedFunction = debounce(
      { delay: 1000, immediate: true },
      execute,
    );
    debouncedFunction();
    vi.advanceTimersByTime(1000);

    expect(execute).toHaveBeenCalledTimes(1);
  });

  it('should execute whenever not called within the delay period and then execute immediately with another call', () => {
    const execute = vi.fn();

    const debouncedFunction = debounce(
      { delay: 1000, immediate: true },
      execute,
    );

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
        debouncedFunction();
        vi.advanceTimersByTime(500);
      }
      vi.advanceTimersByTime(500);
    }

    expect(execute).toHaveBeenCalledTimes(10);
  });
});
