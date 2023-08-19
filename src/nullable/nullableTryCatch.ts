export function nullableTryCatch<T>(fn: (...args: any[]) => T): T | null {
  try {
    return fn();
  } catch (err) {
    return null;
  }
}
