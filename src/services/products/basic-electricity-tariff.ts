import { MONTHS_PER_YEAR } from '../constants/constants';
import { ComparableProduct } from '../interfaces/comparable-product';

export class BasicElectricityTariff implements ComparableProduct {
  public name = 'Basic Electricity Tariff';

  private readonly extraOperationCostsPerMonthInEuros = 5;
  public readonly pricePerKWh = 0.22;

  public calculateAnnualCostsInEuro(consumeInKWh: number) {
    return (
      this.extraOperationCostsPerMonthInEuros * MONTHS_PER_YEAR +
      this.pricePerKWh * consumeInKWh
    );
  }
}
