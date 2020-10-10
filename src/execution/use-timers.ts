import { timers } from '../globalization';

export function useTimers(state: 'on' | 'off') {
  if (state === 'on') {
    timers.forEach(timer => {
      const { method, interval, target } = timer;
      timer.handle = setInterval(() => target ? method.apply(target) : method(), interval || 60000);
    });
  } else if (state === 'off') {
    timers.forEach(timer => clearInterval(timer.handle));
  }
}