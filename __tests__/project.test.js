import { User } from './../src/agecalculator.js';

describe('Ages', () => {

  test('should correctly create a User object with two inputs', () => {
    let person = new User(100, 24);
    expect(person.age).toEqual(100);
    expect(person.mercury).toEqual(24);
  });
  test('should correctly create an age on Mercury', () => {
  let person1 = new User(100);
  expect(person1.mercury()).toEqual(25);
});
});
