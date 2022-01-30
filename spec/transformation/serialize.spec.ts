import { Field, serialize } from '../../src';

class Address {
  @Field(Number, 'civic_number')
  public civicNumber: number;

  @Field(String)
  public street: string;

  @Field(String)
  public city: string;

  @Field(String)
  public province: string;

  @Field(String)
  public country: string;
}

class Person {
  @Field(String, 'first_name')
  public firstName: string;

  @Field(String, 'last_name')
  public lastName: string;

  @Field(Date, 'date_of_birth')
  public dob: Date;

  @Field(String, 'social_insurance_number')
  public sin: number;

  @Field('Address', 'address')
  public addr: Address;
}

describe(`serialize unit tests`, () => {
  test(`serialize with aliases`, () => {
    const addr = new Address();
    const person = new Person();

    addr.civicNumber = 3033;
    addr.street = 'Main St.';
    addr.city = 'Montreal';
    addr.province = 'Quebec';
    addr.country = 'Canada';

    person.firstName = 'Jane';
    person.lastName = 'Doe';
    person.dob = new Date(2000, 10, 11);
    person.sin = 999999999;
    person.addr = addr;

    const result = serialize(person);

    expect(result).toBeDefined();
    expect(result.first_name).toBe(person.firstName);
    expect(result.last_name).toBe(person.lastName);
    expect(result.date_of_birth).toBe(person.dob);
    expect(result.social_insurance_number).toBe(person.sin.toString());

    const { address } = result;

    expect(address).toBeDefined();
    expect(address.civic_number).toBe(addr.civicNumber);
    expect(address.street).toBe(addr.street);
    expect(address.city).toBe(addr.city);
    expect(address.province).toBe(addr.province);
    expect(address.country).toBe(addr.country);
  });
});
