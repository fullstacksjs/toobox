import { isPromise } from './isPromise';

describe('isPromise', () => {
  const falseCases = [
    null,
    undefined,
    42,
    'then',
    true,
    {},
    [],
    () => {},
    { then: true },
    [true],
  ];

  it.each(falseCases)('should return false for %o as input', x => {
    expect(isPromise(x)).toBe(false);
  });

  const fn = () => {};

  fn.then = () => {};

  const trueCases = [{ then: function then() {} }, fn];

  it.each(trueCases)('should return true for %o as input', x => {
    expect(isPromise(x)).toBe(true);
  });
});
