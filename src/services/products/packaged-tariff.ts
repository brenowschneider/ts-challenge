import { ComparableProduct } from '../interfaces/comparable-product';

export class PackagedTariff implements ComparableProduct {
  public name = 'Packaged Tariff';

  private readonly packagedConsumeLimitInKWh = 4000;
  private readonly packagedBaseCostInEuros = 800;
  public readonly pricePerKWh = 0.3;

  public calculateAnnualCostsInEuro(consumeInKWh: number) {
    if (consumeInKWh <= this.packagedConsumeLimitInKWh) {
      return this.packagedBaseCostInEuros;
    }

    const exceededConsumeInKWh = consumeInKWh - this.packagedConsumeLimitInKWh;

    return (
      this.packagedBaseCostInEuros + exceededConsumeInKWh * this.pricePerKWh
    );
  }
}
