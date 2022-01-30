import { Argumenter } from '@joejukan/argumenter';
import { Type } from '../abstraction';
import { toBoolean, toDate, toNumber } from '../conversion';
import { getFields, getSchema, ok } from '../reflection';

export function serialize<T>(type: Type<T>, input: any): any;
export function serialize<T>(input: any, type: Type<T>): any;
export function serialize<T>(input: T): any;
export function serialize<T extends Object>(...args) {
  const argue = new Argumenter(args);
  const input = argue.object as T;
  const builder: Type<T> = argue.function || input['constructor'];

  const fields = getFields(builder);

  const output = {} as T;

  fields
    .filter(({ ignore }) => !ignore)
    .forEach(({ alias, name, symbol }) => {
      const key = ok(alias) ? alias : name;
      const value = input[name];
      const schema = getSchema(symbol);
      const type = <Type>(schema ? schema.type : null);

      if (typeof value !== 'undefined' && value != null) {
        // handle number
        if (symbol === 'Number') {
          output[key] = Array.isArray(value) ? value.map((v) => toNumber(v)) : toNumber(value);
        } else if (symbol === 'Boolean') {
          output[key] = Array.isArray(value) ? value.map((v) => toBoolean(v)) : toBoolean(value);
        } else if (symbol === 'String') {
          output[key] = Array.isArray(value) ? value.map((v) => `${v}`) : `${value}`;
        } else if (symbol === 'Date') {
          output[key] = Array.isArray(value) ? value.map((v) => toDate(v)) : toDate(value);
        } else if (type && value) {
          output[key] = Array.isArray(value) ? value.map((v) => serialize(v, type)) : serialize(value, type);
        } else if (ok(value)) {
          output[key] = value;
        }
      }
    });

  return output;
}
