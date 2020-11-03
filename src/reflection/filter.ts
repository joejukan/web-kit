export function filter<T>(array: Array<T>, each: (item: T) => boolean): Array<T> {
  return array.filter(each);
}