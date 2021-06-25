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
  test('should correctly return age of person01 in mercury years', () => {
    let newMercuryAge = new Person01(75);
    newMercuryAge.mercuryAge();
    expect(newMercuryAge.newMercuryAge).toEqual(18);
  });
  test('should correctly return age of person01 in venus years', () => {
    let newVenusAge = new Person01(75);
    newVenusAge.venusAge();
    expect(newVenusAge.newVenusAge).toEqual(46.50);
  });
  test('should correctly return age of person01 in mars years', () => {
    let newMarsAge = new Person01(75);
    newMarsAge.marsAge();
    expect(newMarsAge.newMarsAge).toEqual(141);
  });
  test('should correctly return age of person01 in jupiter years', () => {
    let newJupiterAge = new Person01(75);
    newJupiterAge.jupiterAge();
    expect(newJupiterAge.newJupiterAge).toEqual(889.5);
  });
  test('should correctly return life expectency of person01 on mercury', () => {
    let newMercuryLifeExp = new Person01(75, 120);
    newMercuryLifeExp.mercuryLifeExp();
    expect(newMercuryLifeExp.mercLifeLeft).toBeCloseTo(10.8);
  });
});

