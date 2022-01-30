import { timers } from '../globalization';

export function startTimer(id: string) {
  const timer = timers.find((t) => t.id === id);
  if (timer) {
    const { method, interval, target, handle } = timer;
    clearInterval(handle);
    timer.handle = setInterval(
      async () => await Promise.resolve(target ? method.apply(target) : method()),
      interval || 60000
    );
  }
}
