import { timers } from '../globalization';
import { startTimer } from './start-timer';
import { stopTimer } from './stop-timer';

type TimerState = 'on' | 'off'

export function useTimers(state: TimerState): void;
export function useTimers(active: boolean): void;
export function useTimers(arg: TimerState | boolean) {
  const state: TimerState = (typeof arg === 'boolean' ? (arg ? 'on' : 'off') : arg );
  if (state === 'on') {
    timers.forEach(timer => startTimer(timer.id));
  } else if (state === 'off') {
    timers.forEach(timer => stopTimer(timer.id));
  }
}