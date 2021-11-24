import { Schedule, useTimers, wait } from '../../src';

const timeout = 10000;
const tenthMock = jest.fn();
const fifthMock = jest.fn();
const halfMock = jest.fn();

class Scheduler {

  @Schedule(100)
  private tenth() {
    tenthMock();
  }

  @Schedule(200)
  private fifth() {
    fifthMock();
  }

  @Schedule(500)
  private half() {
    halfMock();
  }

}

describe(`useTimers unit tests`, () => {
  beforeAll(() => {
    new Scheduler();
  });

  test(`useTimers runs methods`, async () => {
    useTimers('on');
    await wait(1050);
    useTimers('off');
    await wait(1050);
    expect(tenthMock).toBeCalledTimes(10);
    expect(fifthMock).toBeCalledTimes(5);
    expect(halfMock).toBeCalledTimes(2);
  }, timeout)
});