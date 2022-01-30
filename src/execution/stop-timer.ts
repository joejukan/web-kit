import { timers } from '../globalization';

export function stopTimer(id: string) {
  const timer = timers.find((t) => t.id === id);
  if (timer) {
    clearInterval(timer.handle);
  }
}
