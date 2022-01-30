import { Argumenter } from '@joejukan/argumenter';
import { ok } from '../reflection';

type CallbackType = (...args) => boolean | void;

export class IntervalRunner {
  private handle = null;
  private interval;
  private callback: CallbackType;
  private max: number;
  private count: number = 0;

  constructor(callback: CallbackType);
  constructor(callback: CallbackType, interval: number);
  constructor(callback: CallbackType, interval: number, maximum: number);
  constructor(interval: number, callback: CallbackType);
  constructor(interval: number, callback: CallbackType, maximum: number);
  constructor(interval: number, maximum: number, callback: CallbackType);
  constructor(...args) {
    const a = new Argumenter(args);
    const { number: interval, function: callback } = a;
    this.callback = callback;
    this.max = a.number;
    this.interval = ok(interval) ? interval : 1000;
  }

  public run(...args) {
    if (this.callback) {
      this.cancel();
      this.handle = setInterval(() => this.immediate(...args), this.interval);
    }
  }

  public immediate(...args) {
    if (this.callback(...args)) {
      this.cancel();
    }
    this.increment();
  }

  public cancel() {
    clearInterval(this.handle);
    this.count = 0;
  }

  public resetCount() {
    this.count = 0;
  }

  private increment() {
    this.count++;
    if (ok(this.max) && this.count >= this.max) {
      this.cancel();
    }
  }
}
