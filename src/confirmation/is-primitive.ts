/**
 * @author Joseph Eniojukan
 * @description This function determines if an object is a primitive type ( string, number or boolean).
 * @param arg The object that will be evaluated as a primitive type.
 * @returns {boolean} true if the
 */
export function isPrimitive(arg): boolean {
  let type = typeof arg;
  return /string|number|boolean/i.test(type);
}
