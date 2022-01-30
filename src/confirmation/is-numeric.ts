export function isNumeric(value: string): boolean;
export function isNumeric(value: number): boolean;
export function isNumeric(value: any) {
  return !isNaN(<any>value);
}
