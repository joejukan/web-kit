export function pick<T, K extends keyof T>(object: T, ...keys: Array<K>): Pick<T, K>;
export function pick<T>(object: T, ...keys: Array<string>) {
  const result = {} as T;

  if (typeof object === 'object') {
    keys.forEach((key) => (result[key] = object[key]));
  }

  return result;
}
