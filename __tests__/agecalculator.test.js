import { AgeCalculator } from '../src/agecalculator.js';

describe('AgeCalculator class', () => {
  
  
  test('should create new age calculator object with all properties', () => {
    const mercuryAgeObject = new AgeCalculator(30, 100, .24);
    expect(mercuryAgeObject.userAge).toEqual(30);
    expect(mercuryAgeObject.userLifeExpectancy).toEqual(100);
    expect(mercuryAgeObject.planetYearsInEarthYears).toEqual(.24);

  });

  test('should calculate userAge on a given planet', () => {
    const mercuryAgeCalculator = new AgeCalculator(30, 100, .24);
    expect(mercuryAgeCalculator.calculateAge()).toEqual(125);
  })

  test('should calculate userAge on a given planet', () => {
    const venusAgeCalculator = new AgeCalculator(30, 100, .62);
    expect(venusAgeCalculator.calculateAge()).toEqual(48);
  })

  test('should calculate userAge on a given planet', () => {
    const marsAgeCalculator = new AgeCalculator(30, 100, 1.88);
    expect(marsAgeCalculator.calculateAge()).toEqual(16);
  })

  test('should calculate userAge on a given planet', () => {
    const jupiterAgeCalculator = new AgeCalculator(30, 100, 11.86);
    expect(jupiterAgeCalculator.calculateAge()).toEqual(3);
  })

  test('should calculate userLifeExpectancy on a given planet', () => {
    const mercuryLifeExpectancy = new AgeCalculator(30, 100, .24);
    expect(mercuryLifeExpectancy.calculateExpectancy()).toEqual(417);
  })

  test('should calculate userLifeExpectancy on a given planet', () => {
    const venusLifeExpectancy = new AgeCalculator(30, 100, .62);
    expect(venusLifeExpectancy.calculateExpectancy()).toEqual(161);
  })

  test('should calculate userLifeExpectancy on a given planet', () => {
    const marsLifeExpectancy = new AgeCalculator(30, 100, 1.88);
    expect(marsLifeExpectancy.calculateExpectancy()).toEqual(53);
  })

  test('should calculate how many years user has left on planet given the users life expectancy', () => {
    const mercuryYearsLeft = new AgeCalculator(30, 100, .24);
    expect(mercuryYearsLeft.calculateYearsLeft()).toEqual(292);
  })

  test('should calculate how many years over the user life expectancy is if the userAge is higher than expectancy', () => {
    const mercuryOlderUser = new AgeCalculator(105, 100, .24);
    expect(mercuryOlderUser.calculateYearsOver()).toEqual(21);
  })

  

});