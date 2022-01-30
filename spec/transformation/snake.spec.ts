import { snake } from '../../src';

describe(`snake unit tests`, () => {
  test(`camelCase word that starts with a capitalized letter`, () => {
    expect(snake('Hello-World')).toEqual('Hello_World');
  });

  test(`camelCase word that starts with a capitalized letter with the option of lowercasing the first character`, () => {
    expect(snake('Hello-world')).toEqual('Hello_world');
  });

  test(`camelCase word that starts with a lower cased letter`, () => {
    expect(snake('helloWorld')).toEqual('hello_World');
  });
});
