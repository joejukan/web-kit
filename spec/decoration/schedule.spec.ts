import { Schedule, timers } from '../../src';


class Scheduler {

  @Schedule(1000)
  private start() {
  }
  @Schedule(`INTERVAL`)
  private stop() {
  }
}

describe(`schedule unit tests`, () => {

  beforeAll(() => {
    new Scheduler();
  });

  test(`schedule decoration results in a timer`, () => {
    expect(timers.length).toBe(2);
  })

  test(`schedule sets the timer type class properly`, () => {
    expect(timers[0].typeName).toBe(`Scheduler`);
    expect(timers[1].typeName).toBe(`Scheduler`);
  });

  test(`schedule sets the timer method name properly`, () => {
    expect(timers[0].methodName).toBe('start');
    expect(timers[1].methodName).toBe('stop');
  });

  test(`schedule sets the environment variable property`, () => {
    expect(timers[0].envProperty).toBeFalsy();
    expect(timers[1].envProperty).toBe('INTERVAL');
    expect(timers[1].interval).toBe(parseInt(process.env.INTERVAL));
  });
})