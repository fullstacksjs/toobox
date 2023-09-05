import { describe, expect, it, vi } from 'vitest';
import { tryOr } from './tryOr';

describe('Try catch', () => {
  it('should call the passed function to it', () => {
    const fn = vi.fn();
    tryOr(fn);

    expect(fn).toBeCalled();
  });

  it('should return the function return value', () => {
    const fn = () => 1;
    const result = tryOr(fn);

    expect(result).toBe(1);
  });

  it('should call the error handler with error', () => {
    const handler = vi.fn();

    const fn = () => {
      throw 'custom error message';
    };
    tryOr(fn, handler);

    expect(handler).toBeCalledWith('custom error message');
  });

  it('should return the handler return value if there is an error', () => {
    const error = 'handled error';
    const handler = vi.fn(() => error);

    const fn = () => {
      throw 'custom error message';
    };

    const parsedError = tryOr(fn, handler);

    expect(parsedError).toBe(error);
  });

  it('should call the handler with the error throned from fn', () => {
    const handler = vi.fn(() => 'handled error');
    const error = 'custom error message';

    const fn = () => {
      throw error;
    };

    tryOr(fn, handler);

    expect(handler).toBeCalledWith(error);
  });

  it('the default handler should return error', () => {
    const error = 'error';

    const fn = () => {
      throw error;
    };

    const result = tryOr(fn);

    expect(result).toBe(error);
  });

  it('should call return the Promise if the fn is async', async () => {
    const fn = vi.fn(() => Promise.resolve(true));

    await expect(tryOr(fn)).resolves.toBe(true);
  });

  it('handler should call the reject function with the rejected value', async () => {
    const fn = () => Promise.reject(1);
    const handler = vi.fn();
    await tryOr(fn, handler);

    expect(handler).toBeCalledWith(1);
  });

  it("should return the handler return value if it's rejected", async () => {
    const fn = () => Promise.reject(1);
    const handler = vi.fn(e => e + 1);

    await expect(tryOr(fn, handler)).resolves.toBe(2);
  });

  it('the default handler should return the rejected value', async () => {
    const fn = () => Promise.reject(1);

    await expect(tryOr(fn)).resolves.toBe(1);
  });
});
