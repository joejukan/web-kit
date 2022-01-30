import { camel } from '../../src';

describe(`camel unit tests`, () => {
  test(`camelCase word that starts with a capitalized letter`, () => {
    expect(camel('Hello-World')).toEqual('HelloWorld');
  });

  test(`camelCase word that starts with a capitalized letter with the option of lowercasing the first character`, () => {
    expect(camel('Hello-world', true)).toEqual('helloWorld');
  });

  test(`camelCase word that starts with a lower cased letter`, () => {
    expect(camel('hello-world')).toEqual('helloWorld');
  });
});
