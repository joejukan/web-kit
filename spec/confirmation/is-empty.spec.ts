import { isEmpty } from '../../src';

describe(`isEmpty unit tests`, () => {
  test(`detect empty string`, () => {
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty('   ')).toBeTruthy();
  });

  test(`detect non-empty string`, () => {
    expect(isEmpty('s')).toBeFalsy();
    expect(isEmpty('string')).toBeFalsy();
  });

  test(`detect empty object`, () => {
    expect(isEmpty({})).toBeTruthy();
  });

  test(`detect empty array`, () => {
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty([{}])).toBeTruthy();
  });

  test(`detect non-empty array`, () => {
    expect(isEmpty([0])).toBeFalsy();
    expect(isEmpty([3,4])).toBeFalsy();
    expect(isEmpty([{ age: 5 }])).toBeFalsy();
  });
});