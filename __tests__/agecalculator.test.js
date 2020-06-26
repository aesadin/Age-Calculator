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
    expect(mercuryAgeCalculator.calculatAge()).toEqual(125);
  })

});