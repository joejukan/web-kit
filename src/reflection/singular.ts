import { Argumenter } from '@joejukan/argumenter';
import { ok } from '.';
import { singularNoun } from '../globalization';

export function singular(noun: string): string;
export function singular(object: Object): string;
export function singular(type: { new (): any }): string;
export function singular(...args) {
  let argue = new Argumenter(args);
  let type: { new (): any } = argue.function;
  let object = argue.object;
  let noun = argue.string;

  if (object) {
    type = <any>object['constructor'];
  }

  if (type) {
    noun = type['name'];
  }

  if (ok(noun)) {
    noun = noun.toLowerCase();
    if (singularNoun[noun]) {
      noun = singularNoun[noun];
    } else if (noun.endsWith('ices')) {
      noun = noun.replace(/ices$/i, 'ix');
    } else if (noun.endsWith('ies')) {
      noun = noun.replace(/ies$/i, 'y');
    } else if (noun.endsWith('ses') || noun.endsWith('hes') || noun.endsWith('xes')) {
      noun = noun.replace(/es$/i, '');
    } else if (noun.endsWith('a')) {
      noun = noun.replace(/a$/i, 'um');
    } else {
      noun = noun.replace(/s$/i, '');
    }
  }

  return noun;
}
