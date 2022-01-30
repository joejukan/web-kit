import { Argumenter } from '@joejukan/argumenter';

/**
 * @author Joseph Eniojukan
 * @description This function takes a string value and converts it into camelCase.
 * @param value The string value to convert into camelCase.
 * @returns {string} A camelCase string.
 *
 * ```
 * let phrase = camel('hello-world');
 * console.log(phrase)  // helloWorld
 * ```
 */
export function camel(value: string): string;

/**
 * @author Joseph Eniojukan
 * @description This function takes a string value and converts it into camelCase.
 * @param value The string value to convert into camelCase.
 * @param firstLowerCase The indication of whether or not to set the first character as lower case.
 * @returns {string} A camelCase string.
 */
export function camel(value: string, firstLowerCase: boolean): string;

/**
 * @author Joseph Eniojukan
 * @description This function takes a class type and converts it into camelCase.
 * @param type The class type to convert into camelCase.
 * @returns {string} A camelCase string.
 */
export function camel(type: new () => any): string;

/**
 * @author Joseph Eniojukan
 * @description This function takes a class type and converts it into camelCase.
 * @param type The class type to convert into camelCase.
 * @param firstLowerCase The indication of whether or not to set the first character as lower case.
 * @returns {string} A camelCase string.
 *
 * ```
 * import { MyClass } from "./myclass"
 * let name = camel(MyClass, true);
 * console.log(name); // myClass
 * ```
 */
export function camel(type: new () => any, firstLowerCase: boolean): string;

export function camel(...args): string {
  let argue = new Argumenter(args);
  let string = argue.string;
  let firstLowerCase = argue.boolean || false;
  let type: new () => any = argue.function;

  let value: string = string || type.name;
  if (firstLowerCase) {
    value = value.replace(/^[a-zA-Z]/g, (match) => match.toLowerCase());
  }
  return value.replace(/\-\w/gi, (match) => match.toUpperCase().substring(1));
}
