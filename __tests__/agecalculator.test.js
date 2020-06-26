import { AgeCalculator } from '../src/agecalculator.js';

describe('AgeCalculator class', () => {
  
  test('should create new age calculator object with all properties', () => {
    const mercuryAgeCalculator = new AgeCalculator(30, 100, .24);
    expect(mercuryAgeCalculator.userAge).toEqual(30);
    expect(mercuryAgeCalculator.userLifeExpectancy).toEqual(100);
    expect(mercuryAgeCalculator.planetYearsInEarthYears).toEqual(.24);

  });

});