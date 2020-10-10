export interface ITimer {
  id: string;
  type: new (...args) => any;
  interval: number;
  target: Object;
  method: Function;
  typeName: string;
  methodName: string;
  envProperty: string;
  handle?: any;
}