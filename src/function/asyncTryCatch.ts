export async function asyncTryCatch<T, E>(
  fn: (...args: any[]) => Promise<T>,
  onError: (err: unknown) => E,
): Promise<E | T> {
  try {
    return await fn();
  } catch (err) {
    return onError(err);
  }
}
