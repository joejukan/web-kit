import {access} from "../../src";
let tested = {
    title: 'Engineer',
    years: 12,
    person: {
        name: 'John Doe',
        age: 45,
        address: {
            street: '3902 Main Street',
            city: 'New York',
            zip: 90210
        }
    }
}

describe(`access unit tests`, () => {
    test(`access string at level 0`, ()=>{
        expect(access(tested, 'title')).toEqual('Engineer');
    });

    test(`access number at level 0`, ()=>{
        expect(access(tested, 'years')).toEqual(12);
    });

    test(`access string at level 1`, ()=>{
        expect(access(tested, 'person.name')).toEqual('John Doe');
    });

    test(`access number at level 1`, ()=>{
        expect(access(tested, 'person.age')).toEqual(45);
    });

    test(`access string at level 2`, ()=>{
        expect(access(tested, 'person.address.street')).toEqual('3902 Main Street');
        expect(access(tested, 'person.address.city')).toEqual('New York');
    });

    test(`access number at level 2`, ()=>{
        expect(access(tested, 'person.address.zip')).toEqual(90210);
    });
})