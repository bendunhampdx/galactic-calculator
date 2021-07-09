export class Person01 {
  constructor(age, lifeExp) {
    this.age = age
    this.lifeExp = lifeExp
    this.newMercuryAge = 0
    this.mercuryLifeExp = 0
    this.mercuryLife = 0
    this.mercuryLifeBeyond = 0
    this.venusLifeExp = 0
    this.venusLife = 0
    this.venusLifeBeyond = 0
    this.marsLifeExp = 0
    this.marsLife = 0
    this.marsLifeBeyond = 0
    this.jupiterLifeExp = 0
    this.jupiterLife = 0
    this.jupiterLifeBeyond = 0
    

  };
  mercuryAge() {
    this.newMercuryAge = this.age * .24;
    return this.newMercuryAge;
  };
  venusAge() {
    this.newVenusAge = this.age * .62;
    return this.newVenusAge;
  };
  marsAge() {
    this.newMarsAge = this.age * 1.88;
    return this.newMarsAge;
  };
  jupiterAge() {
    this.newJupiterAge = this.age * 11.86;
    return this.newjupiterAge;
  };
  mercuryLifeEx() {
    this.mercuryLifeExp = this.lifeExp * .24;
    return this.mercuryLifeExp;
  };
  mercuryLifeLeft() {
    this.mercuryLife = this.mercuryLifeExp - this.newMercuryAge;
    if (this.mercuryLife >= 0) {
      this.mercuryLife = `You have ${this.mercuryLife} years left to live on mercury.` 
    } else {
      this.mercuryLife = `You have lived past you life on mercury by ${this.mercuryLife * -1} years.`
    }
    return this.mercuryLife;
  };
  venusLifeEx() {
    this.venusLifeExp = this.lifeExp * .62;
    return this.venusLifeExp;
  };
  venusLifeLeft() {
    this.venusLife = this.venusLifeExp - this.newVenusAge;
    if (this.venusLife >= 0) {
      this.venusLife = `You have ${this.venusLife} years left to live on venus.` 
    } else {
      this.venusLife = `You have lived past you life on venus by ${this.venusLife * -1} years.`
  };
  return this.venusLife;
  };
  marsLifeEx() {
    this.marsLifeExp = this.lifeExp * 1.88;
    return this.marsLifeExp;
  };
  marsLifeLeft() {
    this.marsLife = this.marsLifeExp - this.newMarsAge;
    if (this.marsLife >= 0) {
      this.marsLife = `You have ${this.marsLife} years left to live on mars.` 
    } else {
      this.marsLife = `You have lived past you life on mars by ${this.marsLife * -1} years.`
  };
  return this.marsLife;
  };
  jupiterLifeEx() {
    this.jupiterLifeExp = this.lifeExp * 11.86;
    return this.jupiterLifeExp;
  };
  jupiterLifeLeft() {
    this.jupiterLife = this.jupiterLifeExp - this.newJupiterAge;
    if (this.jupiterLife >= 0) {
      this.jupiterLife = `You have ${this.jupiterLife} years left to live on jupiter.` 
    } else {
      this.jupiterLife = `You have lived past you life on jupiter by ${this.jupiterLife * -1} years.`
  };
  return this.jupiterLife;
 
  }
};
