import { Argumenter } from '@joejukan/argumenter';
import { Type } from '../abstraction';
import { toBoolean, toDate, toNumber } from '../conversion';
import { getFields, getSchema, ok } from '../reflection';

export function define<T=any>(type: Type<T>, object: Object): T;
export function define<T=any>(object: Object, type: Type<T>): T;
export function define<T>(from: Object, type: T);
export function define(...args) {
  const a = new Argumenter(args);

  const construct = <Type> a.function;
  const from = a.object;
  const to = a.object || new construct();

  const fields = getFields(to);

  fields.forEach(({ alias, cardinality, name, symbol }) => {
    const key = ok(alias) ? alias : name;
    const value = from[key];
    const schema = getSchema(symbol);
    const type = <Type> (schema ? schema.type : null);
    
    if (typeof value !== 'undefined' && value != null) {
      // handle number
      if (symbol === 'Number') {
        to[name] = Array.isArray(value) ? value.map(v => toNumber(v)) : toNumber(value);
      } else if (symbol === 'Boolean') {
        to[name] = Array.isArray(value) ? value.map(v => toBoolean(v)) : toBoolean(value);
      } else if (symbol === 'String') {
        to[name] = Array.isArray(value) ? value.map(v => `${v}`) : `${value}`;
      } else if (symbol === 'Date') {
        to[name] = Array.isArray(value) ? value.map(v => toDate(v)) : toDate(value);
      } else if (type && value) {
        to[name] = Array.isArray(value) ? value.map(v => new type(v)) : new type(value);
      } else if (ok(value)) {
        to[name] = value;
      }
    }
  });

  if (construct) {
    return to;
  }

}