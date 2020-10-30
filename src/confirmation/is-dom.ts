
export function isDOM(object: any): boolean;
export function isDOM(el: HTMLElement) {
  if (el) {
    try{
      return el instanceof HTMLElement;
    } catch(err) {
      return (typeof el === 'object') && (el.nodeType === 1) && (typeof el.style === 'object') && (typeof el.ownerDocument === 'object')
    }
  }
  return false;
}