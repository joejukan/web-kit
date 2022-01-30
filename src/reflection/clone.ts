import { copy, isPrimitive } from '../.';

export function clone<T extends any>(object: T): T {
  if (isPrimitive(object)) return object;
  else if (Array.isArray(object)) {
    let array = [];
    //array.type = object.type;
    object.forEach((item) => array.push(clone(item)));
    return <any>array;
  } else if (typeof object === 'object' && object !== null) return cloneObject(object);
}
/** @hidden */
function cloneObject(object) {
  let type: { new () } = <any>object['constructor'];
  let subject = new type();

  copy(object, subject);
  return subject;
}
