/**
 * Asynchronously calls {@link fn} and returns its return value if there are no errors; but if there are any, calls
 * {@link onError} and returns its return value
 * @param {Function} fn To be called and have its return value returned if there are no errors
 * @param {Function} onError To be called when there is an error and have its return value returned
 * @returns {any} on of the passed functions return value
 * @example
 * const execute = () => Promise.reject('Unknown Error');
 *
 * const handler = (err: unknown) => {
 *  return 'Parsed Error';
 * };
 *
 * asyncTryCatch(execute, handler); // 'Parsed Error'
 */
export async function asyncTryCatch<T, E>(
  fn: (...args: any[]) => Promise<T>,
  onError: (err: unknown) => E,
): Promise<E | T> {
  try {
    return await fn();
  } catch (err) {
    return onError(err);
  }
}
