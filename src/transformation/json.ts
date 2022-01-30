/**
 * @author Joseph Eniojukan
 * @description This function converts JSON string into a Javascript object.
 * @param text The JSON string that will be converted into a Javascript object.
 * @returns A Javascript object.
 */
export function json(text: string): any;

/**
 * @author Joseph Eniojukan
 * @description This function converts a Javascript object into a JSON string.
 * @param object The Javascript object that will be converted into a JSON string.
 */
export function json(object: any): string;

export function json(value) {
  if (typeof value === 'string') {
    return JSON.parse(value);
  } else if (value instanceof Object) {
    return JSON.stringify(value, undefined, 3);
  }
}
