import { filter } from './filter';

export function contains<T>(array: Array<T>, each: (item: T) => boolean): boolean {
  return filter(array, each).length > 0;
}
