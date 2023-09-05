import { fallbackNumber } from './fallbackNumber.ts';

/**
 * Parses the string to integer (radix 10)
 * and returns fallback when the value is not finite
 *
 * @param {string} s string to parse
 * @param {number} [fallback=NaN] fallback value when parse failed
 * @returns {number} parsed number or fallback
 *
 * @example
 *
 * toInteger('S')            // NaN
 * toInteger('100')          // 100
 * toInteger('1.42')         // 1
 * toInteger('S', 10)        // 10
 * toInteger('S', undefined) // NaN
 */
export function toDecimal(s: string, fallback: number = NaN): number {
  return fallbackNumber(Number.parseInt(s, 10), fallback);
}
