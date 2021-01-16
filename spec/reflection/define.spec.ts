import { define, Field, Ignore } from "../../src";

class Person {
  @Field('String')
  public firstName: string;

  @Field(String)
  public lastName: string;

  @Ignore()
  @Field(String)
  public sin: string;

  @Field('Date')
  public dob: Date;

  @Field(Number)
  public weight: number;
}

describe('define unit tests', () => {
  test('define type with raw object', () => {
    const object = <Person> { firstName: 'Jane', lastName: 'Doe', sin: '999 999 999', dob: new Date('1988-10-11'), weight: 130 };
    const person = define(Person, object);
    
    expect(person).toBeDefined();
    expect(person.firstName).toEqual(object.firstName);
    expect(person.lastName).toEqual(object.lastName);
    expect(person.weight).toEqual(object.weight);
    expect(person.dob).toEqual(object.dob);
    expect(person.sin).toBeUndefined();
  });
})