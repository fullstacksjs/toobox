/**
 * Calls {@link fn} and returns its return value if there are no errors; but if there are any, returns
 * null
 * @param {Function} fn To be called and have its return value returned if there are no errors
 * @returns {any} either the return value of {@link fn} or null
 *
 * @example
 * const execute = () => {
 *  throw 'Unknown Error';
 * };
 *
 * nullableTryCatch(execute); // null
 */
export function nullableTryCatch<T>(fn: (...args: any[]) => T): T | null {
  try {
    return fn();
  } catch (err) {
    return null;
  }
}
