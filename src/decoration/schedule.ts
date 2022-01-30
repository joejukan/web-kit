import { Argumenter } from '@joejukan/argumenter';
import { isNumeric, isBrowser } from '../confirmation';
import { timers } from '../globalization';
import { uuid } from '../identification';
import { ok } from '../reflection';

export function Schedule(interval: number);
export function Schedule(envProperty: string);
export function Schedule(interval: number, envProperty: string);
export function Schedule(envProperty: string, interval: number);
export function Schedule(...args) {
  const { env } = process;
  const id = uuid();
  const argue = new Argumenter(args);
  const envProperty = argue.string;
  let interval = argue.number;

  if (ok(envProperty) && ok(env[envProperty])) {
    const value = env[envProperty];
    if (isNumeric(value)) {
      interval = parseInt(value);
    }
  }

  return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
    const method: Function = descriptor.value;
    const type: { new (...args): any } = <any>target['constructor'];
    const typeName = type.name;

    timers.push({ id, interval, envProperty, target, type, method, typeName, methodName });
    return descriptor;
  };
}
