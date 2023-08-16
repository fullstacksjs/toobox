export function tryCatch<T, E>(
  fn: (...args: any[]) => T,
  onError: (err: unknown) => E,
): E | T {
  try {
    return fn();
  } catch (err) {
    return onError(err);
  }
}
