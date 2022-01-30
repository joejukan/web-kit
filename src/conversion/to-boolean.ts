import { Argumenter } from '@joejukan/argumenter';
import { ok } from '../reflection';

export function toBoolean(value: string): boolean;
export function toBoolean(value: number): boolean;
export function toBoolean(value: boolean): boolean;
export function toBoolean(...args) {
  const { string, number, boolean } = new Argumenter(args);

  if (typeof boolean === 'boolean') {
    return boolean;
  } else if (ok(number)) {
    return number > 0;
  } else if (ok(string)) {
    return /^true$/.test(string.trim());
  }
}
