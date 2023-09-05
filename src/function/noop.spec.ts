import { noop } from './noop.ts';

describe('noop', () => {
  it('should return undefined', () => {
    expect(noop()).toBeUndefined();
  });
});
