/**
 * @author Joseph Eniojukan
 * @description This method allows safe access to nested properties in an object, safe-guarding against exceptions due to null or undefined properties.
 * @param object The object that will be accessed.
 * @param path The path to the nested property.
 * @returns {any} The nested property value.
 */
export function access(object, path: string): any {
  // TODO: support array accessor
  var paths = path.split('.');
  let current = object;

  for (let i = 0; i < paths.length; i++) {
    let path = paths[i];
    if (current[path] === undefined) {
      return undefined;
    } else {
      current = current[path];
    }
  }

  return current;
}
