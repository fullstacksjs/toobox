import { bind } from './bind.ts';
import type { Nullable } from '../types/types.ts';

const getNull = () => null;
const fromNullToNum = (_n: null) => 100;
const f = (_x: string) => 2;
const g = (_x: number): Nullable<number[]> => [1, 3];
const h = (_x: number[]) => ({ msg: 2 });
const j = (_x: Record<string, unknown>): Nullable<boolean> => false;
const k = (x: Nullable<boolean>) => x;
const l = (_x: (number | string)[]) => 50;

describe('bind', () => {
  const cases = [
    { x: 'normal', fns: [f], expected: 2 },
    { x: 'normal', fns: [f, g], expected: [1, 3] },
    { x: 'normal', fns: [f, g, h], expected: { msg: 2 } },
    { x: 'normal', fns: [f, g, h, j], expected: false },
    { x: 'normal', fns: [f, g, h, j, k], expected: false },
    { x: 'normal', fns: [f, g, h, j, k, l], expected: 50 },
  ];

  it.each(cases)(
    'should compose %# functions given $x',
    ({ x, fns, expected }) => {
      expect(bind(x, ...(fns as [any]))).toStrictEqual(expected);
    },
  );

  it('should return null if first arg is null', () => {
    expect(bind(null, f, g, h, j, k)).eq(null);
  });

  it('should return null if any composed function returned null', () => {
    expect(bind('normal', f, g, getNull, h, j)).eq(null);
  });

  it('should return null if any composed function returned null and should stop calling the next function', () => {
    expect(bind('normal', f, g, getNull, fromNullToNum)).eq(null);
  });
});
