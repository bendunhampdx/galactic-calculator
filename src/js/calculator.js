export class Person01 {
  constructor(age, lifeExp) {
    this.age = age
    this.lifeExp = lifeExp
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
    return this.mercuryLife;
  };
  mercuryLifeLived() {
    this.mercuryLifeBeyond = this.newMercuryAge - this.mercuryLifeExp;
    return this.mercuryLifeBeyond;
  }
  venusLifeEx() {
    this.venusLifeExp = this.lifeExp * .62;
    return this.venusLifeExp;
    };
  venusLifeLeft() {
    this.venusLife = this.venusLifeExp - this.newVenusAge;
    return this.venusLife;
  };
  venusLifeLived() {
    this.venusLifeBeyond = this.newVenusAge - this.venusLifeExp;
    return this.venusLifeBeyond;
  }
  marsLifeEx() {
    this.marsLifeExp = this.lifeExp * 1.88;
    return this.marsLifeExp;
    };
    marsLifeLeft() {
      this.marsLife = this.marsLifeExp - this.newMarsAge;
      return this.marsLife;
    };
    marsLifeLived() {
      this.marsLifeBeyond = this.newMarsAge - this.marsLifeExp;
      return this.marsLifeBeyond;
    }
    jupiterLifeEx() {
      this.jupiterLifeExp = this.lifeExp * 11.86;
      return this.jupiterLifeExp;
      };
    jupiterLifeLeft() {
      this.jupiterLife = this.jupiterLifeExp - this.newJupiterAge;
      return this.jupiterLife;
      };
    jupiterLifeLived() {
      this.jupiterLifeBeyond = this.newJupiterAge - this.jupiterLifeExp;
      return this.jupiterLifeBeyond;
      }
}
