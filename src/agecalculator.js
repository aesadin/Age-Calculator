export class AgeCalculator {
  constructor (userAge, userLifeExpectancy, planetYearsInEarthYears) {
    this.userAge = userAge;
    this.userLifeExpectancy = userLifeExpectancy;
    this.planetYearsInEarthYears = planetYearsInEarthYears;

  }

  calculateAge() {
    return (this.userAge / this.planetYearsInEarthYears);

  }

  calculateExpectancy() {
    return parseInt((this.userLifeExpectancy / this.planetYearsInEarthYears).toFixed());
  }

};