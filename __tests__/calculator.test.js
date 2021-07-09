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
    let mercuryLifeLeft = new Person01(25,120);
    mercuryLifeLeft.mercuryAge();
    mercuryLifeLeft.mercuryLifeEx();
    mercuryLifeLeft.mercuryLifeLeft();
    expect(mercuryLifeLeft.mercuryLife).toEqual(`You have 22.799999999999997 years left to live on mercury.` );
  });
  test('should correctly return life lived past of person01 on mercury', () => {
    let mercuryLifeLeft = new Person01(500,120);
    mercuryLifeLeft.mercuryAge();
    mercuryLifeLeft.mercuryLifeEx();
    mercuryLifeLeft.mercuryLifeLeft();
    expect(mercuryLifeLeft.mercuryLife).toEqual(`You have lived past you life on mercury by 91.2 years.`);
  });
  
  test('should correctly return life expectency of person01 on venus', () => {
    let venusLifeExp = new Person01(75,120);
    venusLifeExp.venusLifeEx();
    expect(venusLifeExp.venusLifeExp).toBeCloseTo(74.4);
  });
  test('should correctly return life left of person01 on venus', () => {
    let venusLifeLeft = new Person01(25,120);
    venusLifeLeft.venusAge();
    venusLifeLeft.venusLifeEx();
    venusLifeLeft.venusLifeLeft();
    expect(venusLifeLeft.venusLife).toEqual(`You have 58.9 years left to live on venus.` );
  });
  test('should correctly return life lived past of person01 on venus', () => {
    let venusLifeLeft = new Person01(500,120);
    venusLifeLeft.venusAge();
    venusLifeLeft.venusLifeEx();
    venusLifeLeft.venusLifeLeft();
    expect(venusLifeLeft.venusLife).toEqual(`You have lived past you life on venus by 235.6 years.`);
  });
  test('should correctly return life expectency of person01 on mars', () => {
    let marsLifeExp = new Person01(75,120);
    marsLifeExp.marsLifeEx();
    expect(marsLifeExp.marsLifeExp).toBeCloseTo(225.6);
  });
  test('should correctly return life left of person01 on mars', () => {
    let marsLifeLeft = new Person01(75,120);
    marsLifeLeft.marsAge();
    marsLifeLeft.marsLifeEx();
    marsLifeLeft.marsLifeLeft();
    expect(marsLifeLeft.marsLife).toBeCloseTo(84.6);
  });
  test('should correctly return life person01 has lived past expectency', () => {
    let marsLifeLived = new Person01(125,120);
    marsLifeLived.marsAge();
    marsLifeLived.marsLifeEx();
    marsLifeLived.marsLifeLived();
    expect(marsLifeLived.marsLifeBeyond).toBeCloseTo(9.4);
  });
  test('should correctly return life expectency of person01 on jupiter', () => {
    let jupiterLifeExp = new Person01(75,120);
    jupiterLifeExp.jupiterLifeEx();
    expect(jupiterLifeExp.jupiterLifeExp).toBeCloseTo(1423.2);
  });
  test('should correctly return life left of person01 on jupiter', () => {
    let jupiterLifeLeft = new Person01(75,120);
    jupiterLifeLeft.jupiterAge();
    jupiterLifeLeft.jupiterLifeEx();
    jupiterLifeLeft.jupiterLifeLeft();
    expect(jupiterLifeLeft.jupiterLife).toBeCloseTo(533.7);
  });
  test('should correctly return life person01 has lived past expectency', () => {
    let jupiterLifeLived = new Person01(125,120);
    jupiterLifeLived.jupiterAge();
    jupiterLifeLived.jupiterLifeEx();
    jupiterLifeLived.jupiterLifeLived();
    expect(jupiterLifeLived.jupiterLifeBeyond).toBeCloseTo(59.3);
  });
});

