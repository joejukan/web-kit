import { isPrimitive } from '../.';
export function clear(arg) {
  if (Array.isArray(arg)) arg.splice(0, arg.length);
  else if (typeof arg === 'object') {
    for (let key in arg) {
      let value = arg[key];
      let type = typeof value;

      if (isPrimitive(value)) arg[key] = undefined;
      else if (type === 'object') clear(value);
    }
  }
}
