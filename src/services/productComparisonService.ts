import { ComparableProduct } from './interfaces/comparable-product';
import { Product } from './interfaces/product';
import { BasicElectricityTariff } from './products/basic-electricity-tariff';
import { PackagedTariff } from './products/packaged-tariff';

const products: Array<ComparableProduct> = [
  new BasicElectricityTariff(),
  new PackagedTariff(),
];

const sortProductsByCostsAscending = (products: Array<Product>) => {
  return products.sort(
    (product1, product2) =>
      product1.annualCostsInEuros - product2.annualCostsInEuros
  );
};

export const compareProductConsumePerYear = (
  consumeInKWh: number
): Array<Product> => {
  if (consumeInKWh <= 0) {
    throw new Error(
      'Please pass a valid consume (e.g. 1000, 2000) for comparing the product costs'
    );
  }

  const mappedProducts = products.map<Product>((product) => {
    return {
      name: product.name,
      annualCostsInEuros: product.calculateAnnualCostsInEuro(consumeInKWh),
    };
  });

  return sortProductsByCostsAscending(mappedProducts);
};
