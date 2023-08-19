export async function asyncNullableTryCatch<T>(
  fn: (...args: any[]) => Promise<T>,
): Promise<T | null> {
  try {
    return await fn();
  } catch (err) {
    return null;
  }
}
