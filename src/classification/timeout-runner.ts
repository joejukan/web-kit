import { Argumenter } from '@joejukan/argumenter';
import { ok } from '../reflection';

export class TimeoutRunner {
  private handle = null;
  private timeout;
  private callback: Function;

  constructor(callback: Function);
  constructor(callback: Function, timeout: number);
  constructor(timeout: number, callback: Function);
  constructor(...args) {
    const { number: timeout, function: callback} = new Argumenter(args);
    this.timeout = ok(timeout) ? timeout : 1000;
    this.callback = callback;
  }

  public run(...args) {
    if (this.callback) {
      this.cancel();
      this.handle = setTimeout(() => {
        this.callback(...args);
        this.cancel();
      }, this.timeout);
    }
  }

  public cancel() {
    clearTimeout(this.handle);
  }
}