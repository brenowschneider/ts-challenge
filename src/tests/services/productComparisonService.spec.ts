import { expect } from 'chai';
import 'mocha';
import { compareProductConsumePerYear } from '../../services/productComparisonService';

describe('First test', () => {
  it('should return "Basic Electricity Tariff" as first element when consume is 2000', () => {
    const result = compareProductConsumePerYear(2000);
    expect(result).to.eql([
      { name: 'Basic Electricity Tariff', annualCostsInEuros: 500 },
      { name: 'Packaged Tariff', annualCostsInEuros: 800 },
    ]);
  });

  it('should return "Packaged Tariff" as first element when consume is 4000', () => {
    const result = compareProductConsumePerYear(4000);
    expect(result).to.eql([
      { name: 'Packaged Tariff', annualCostsInEuros: 800 },
      { name: 'Basic Electricity Tariff', annualCostsInEuros: 940 },
    ]);
  });

  it('should return "Basic Electricity Tariff" as first element when consume is 4000', () => {
    const result = compareProductConsumePerYear(6000);
    expect(result).to.eql([
      { name: 'Basic Electricity Tariff', annualCostsInEuros: 1380 },
      { name: 'Packaged Tariff', annualCostsInEuros: 1400 },
    ]);
  });
});
