export function filter<T>(array: Array<T>, each: (item: T) => boolean): Array<T> {
  return Array.isArray(array) ? array.filter(each) : [];
}
