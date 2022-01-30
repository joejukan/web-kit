import { Argumenter } from '@joejukan/argumenter';
import { ok } from '../reflection';

export function toDate(value: string): Date;
export function toDate(value: number): Date;
export function toDate(value: Date): Date;
export function toDate(...args) {
  const a = new Argumenter(args);
  const { string, number } = a;
  const date = a.instance(Date);

  if (date) {
    return date;
  } else if (ok(string)) {
    return new Date(string);
  } else if (ok(number)) {
    return new Date(number);
  }
}
