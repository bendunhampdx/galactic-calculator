export class Person01 {
  constructor(age, lifeExp) {
    this.age = age
    this.lifeExp = lifeExp
  };
  mercuryAge() {
    this.newMercuryAge = this.age * .24;
    return this.newMercuryAge;
  };
}

