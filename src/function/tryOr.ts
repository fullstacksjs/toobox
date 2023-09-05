import { isPromise } from '../guards';

/**
 * @template THandlerReturn
 * @template TResult
 * @template THandlerReturnResult
 *
 * Calls {@link fn} and returns its return value if there are no errors; but if there are any, calls
 * {@link onError} and returns its return value
 *
 * @param {Function} fn To be called and have its return value returned if there are no errors
 * @param {Function} onError To be called when there is an error and have its return value returned
 * @returns {TResult | THandlerReturnResult} on of the passed functions return value
 *
 * @example
 *
 * tryCatch(() => { throw new Error('Whoops') }, (e) => e.message); // 'Whoops'
 * tryCatch(() => 42, (e) => e.message); // 42
 */

export function tryOr<TReturn>(fn: () => TReturn): TReturn;
export function tryOr<TError, THandlerReturn>(
  fn: () => never,
  or: (error: TError) => THandlerReturn,
): THandlerReturn;
export function tryOr<TReturn, TError, THandlerReturn>(
  fn: () => Promise<TReturn>,
  or: (error: TError) => THandlerReturn,
): Promise<THandlerReturn | TReturn>;
export function tryOr<TReturn, TError, THandlerReturn>(
  fn: () => TReturn,
  or: (error: TError) => THandlerReturn,
): THandlerReturn | TReturn;

export function tryOr<TReturn, TError, THandlerReturn>(
  fn: () => TReturn,
  or: (error: TError) => THandlerReturn = x => x as any,
): any {
  try {
    const result = fn();
    if (isPromise(result)) return result.catch(or);
    return result;
  } catch (err) {
    return or(err as TError);
  }
}
