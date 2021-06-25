import {Person01} from '../src/js/calculator.js'

describe('Person01', () => {
  test('should correctly create a person class object with age property', () => {
    let newPerson = new Person01(75);
    expect(newPerson.age).toBeDefined();
  });
  test('should correctly create a person class object with life expectency property', () => {
    let newPerson = new Person01(75, 120);
    expect(newPerson.lifeExp).toBeDefined();
  });
});
