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
    let mercuryLifeExp = new Person01(75,120);
    mercuryLifeExp.mercuryLifeEx();
    expect(mercuryLifeExp.mercuryLifeExp).toBeCloseTo(28.8);
  });
  test('should correctly return life left of person01 on mercury', () => {
    let mercuryLifeLeft = new Person01(75,120);
    mercuryLifeLeft.mercuryAge()
    mercuryLifeLeft.mercuryLifeEx();
    mercuryLifeLeft.mercuryLifeLeft();
    expect(mercuryLifeLeft.mercuryLife).toBeCloseTo(10.8);
  });
  test('should correctly return life expectency of person01 on venus', () => {
    let venusLifeExp = new Person01(75,120);
    venusLifeExp.venusLifeEx();
    expect(venusLifeExp.venusLifeExp).toBeCloseTo(74.4);
  });
});

