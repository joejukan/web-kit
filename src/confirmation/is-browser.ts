/**
 * @author Joseph Eniojukan
 * @description This function indicates whether or not it is called in a browser or non-browser environment.
 * @returns {boolean} true if called in a browser environment, false if not.
 */
export function isBrowser(): boolean {
  try {
    return typeof window !== 'undefined';
  } catch (err) {}
  return false;
}
