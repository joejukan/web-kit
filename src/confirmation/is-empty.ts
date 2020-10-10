import { Argumenter } from '@joejukan/argumenter';
import { ok } from '../reflection/ok';

export function isEmpty(value: string): boolean;
export function isEmpty(value: Object): boolean;
export function isEmpty<T=any>(value: Array<T>): boolean;
export function isEmpty(...args) {
  const a = new Argumenter(args);
  const { string, number, object, array } = a;

  if (typeof string === 'string') {
    return !ok(string);
  } else if (typeof number === 'number') {
    return !ok(number);
  }
  else if (array) {
    for (let i = 0; i < array.length; i++) {
      if (!isEmpty(array[i])) {
        return false;
      }
    }
  } else if (object) {
    for (let k in object) {
      if (ok(object[k])) {
        return false;
      }
    }
  }

  return true;
}