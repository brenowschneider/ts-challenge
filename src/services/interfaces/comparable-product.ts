export interface ComparableProduct {
    name: string;
    readonly pricePerKWh: number;
    calculateAnnualCostsInEuro: (consumeInKWh: number) => number;
}