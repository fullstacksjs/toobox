/**
 * Check whether the given value is a Promise
 *
 * @param {unknown} x any value
 * @returns {boolean} true when the value is an object
 *
 * @example
 *
 * isPromise(null)           // false
 * isPromise(undefined)      // false
 * isPromise(42)             // false
 * isPromise('then')         // false
 * isPromise(true)           // false
 * isPromise({})             // false
 * isPromise([])             // false
 * isPromise([true])         // false
 * isPromise(() => {})       // false
 * isPromise({ then: true }) // false
 * isPromise({ then: fn })   // true
 */
export const isPromise = (x: unknown): x is Promise<unknown> =>
  x != null &&
  (typeof x === 'object' || typeof x === 'function') &&
  'then' in x &&
  typeof x.then === 'function';
