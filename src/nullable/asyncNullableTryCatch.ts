/**
 * Asynchronously calls {@link fn} and returns its return value if there are no errors; but if there are any, returns
 * null
 * @param {Function} fn To be called and have its return value returned if there are no errors
 * @returns {any} either the return value of {@link fn} or null
 *
 * @example
 * const execute = () => Promise.reject("Unknown Error");
 *
 * await asyncNullableTryCatch(execute); // null
 */
export async function asyncNullableTryCatch<T>(
  fn: (...args: any[]) => Promise<T>,
): Promise<T | null> {
  try {
    return await fn();
  } catch (err) {
    return null;
  }
}
