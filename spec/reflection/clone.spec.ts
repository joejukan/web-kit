import { clone } from '../../src';

class Basic {}
describe('clone unit tests', () => {
  test('clone an instance of a basic class', () => {
    const basic = new Basic();
    const result = clone(basic);
    console.info({ basic, result });
    expect(result).toBeInstanceOf(Basic);
  });
});
