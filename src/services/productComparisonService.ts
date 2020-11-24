import { ComparableProduct } from "./interfaces/comparable-product";
import { Product } from "./interfaces/product";
import { BasicElectricityTariff } from "./products/basic-electricity-tariff";
import { PackagedTariff } from "./products/packaged-tariff";

const products: Array<ComparableProduct> = [
    new BasicElectricityTariff(),
    new PackagedTariff()
]

export const compareProductConsumePerYear = (consumeInKWh: number): Array<Product> => {
    const mappedProducts = products.map<Product>(product => {
      return {
        name: product.name,
        annualCostsInEuros: product.calculateAnnualCostsInEuro(consumeInKWh)
      }
    })

    return mappedProducts.sort((product1, product2) => product1.annualCostsInEuros - product2.annualCostsInEuros)

}
