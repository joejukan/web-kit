import { Argumenter } from '@joejukan/argumenter';
import { ok } from '../reflection';

export function toNumber(value: number): number;
export function toNumber(value: string): number;
export function toNumber(value: boolean): number;
export function toNumber(value: Date): number;
export function toNumber(...args) {
  const a = new Argumenter(args);
  const string = a.string;
  const number = a.number;
  const boolean = a.boolean;
  const date = a.instance(Date);

  if (ok(number)) {
    return number;
  } else if (boolean === true || boolean === false) {
    return boolean ? 1 : 0;
  } else if (date) {
    return date.getTime();
  } else if (ok(string)) {
    try {
      return /\./.test(string) ? parseFloat(string) : parseInt(string);
    } catch (err) {}
  }
}
