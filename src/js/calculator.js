export class Person01 {
  constructor(age, lifeExp) {
    this.age = age
    this.lifeExp = lifeExp
    this.newMercuryAge = 0
  };
  mercuryAge() {
    this.newMercuryAge = this.age * .24;
    return this.newMercuryAge;
  };
  venusAge() {
    this.newVenusAge = this.age * .62;
    return this.newMercuryAge;
  };
  marsAge() {
    this.newMarsAge = this.age * 1.88
    return this.newMarsAge;
  }
  jupiterAge() {
    this.newJupiterAge = this.age * 11.86
  }
  mercuryLifeExp() {
    let mercLifeExp = this.lifeExp * .24
    let mercLifeLeft = mercLifeExp - this.newMercuryAge
    return mercLifeLeft;
  }
}

