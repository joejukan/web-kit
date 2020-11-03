import { filter } from './filter';

export function first<T>(array: Array<T>, each: (item: T) => boolean): T {
  const filtered = filter(array, each);
  return filtered.length > 0 ? filtered[0] : null;
}