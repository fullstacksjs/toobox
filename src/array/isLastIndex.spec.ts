import { isLastIndex } from './isLastIndex.ts';

describe('array', () => {
  describe('isLastIndex', () => {
    const cases = [
      { arr: [], index: 0, expected: false },
      { arr: [1], index: 0, expected: true },
      { arr: [1, 2], index: 1, expected: true },
      { arr: [], index: -1, expected: false },
      { arr: [[], [], []], index: 0, expected: false },
      { arr: [[], [], []], index: 2, expected: true },
      { arr: [undefined], index: 0, expected: true },
      { arr: [null], index: 0, expected: true },
      { arr: [,], index: 0, expected: true },
      { arr: [, ,], index: 1, expected: true },
      { arr: [, null], index: 1, expected: true },
      { arr: [, undefined], index: 1, expected: true },
    ];

    it.each(cases)('%o', ({ expected, arr, index }) => {
      expect(isLastIndex(arr, index)).toBe(expected);
    });
  });
});
