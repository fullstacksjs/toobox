import { isObject } from './isObject.ts';

describe('isObject', () => {
  const cases = [
    { x: '', expected: false },
    { x: 'hello world', expected: false },
    { x: null, expected: false },
    { x: true, expected: false },
    { x: undefined, expected: false },
    { x: NaN, expected: false },
    { x: 0, expected: false },
    { x: isObject, expected: false },
    { x: false, expected: false },
    { x: [], expected: false },
    { x: [2], expected: false },
    { x: {}, expected: true },
    { x: { a: 2 }, expected: true },
    { x: { 2: 'a' }, expected: true },
  ];

  it.each(cases)(
    'should return $expected for $x as input',
    ({ x, expected }) => {
      expect(isObject(x)).toBe(expected);
    },
  );
});
