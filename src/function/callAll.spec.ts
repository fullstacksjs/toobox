import { callAll } from './callAll.ts';

describe('callAll', () => {
  it('should call given functions with an args', () => {
    const fns = [vi.fn<number[]>(), vi.fn<number[]>(), vi.fn<number[]>()];
    const args = [1, 2, 3];
    callAll(...fns)(...args);
    fns.forEach(fn => expect(fn).toHaveBeenCalledWith(...args));
  });

  it('should not throw with not-callable arguments', () => {
    const fns = [vi.fn<number[]>(), vi.fn<number[]>()] as const;
    const nonFns = [undefined, 'string' as any, null, 5 as any];
    const args = [1, 2, 3];
    callAll(fns[0], ...nonFns, fns[1])(...args);
    fns.forEach(fn => expect(fn).toHaveBeenCalledWith(...args));
  });
});
