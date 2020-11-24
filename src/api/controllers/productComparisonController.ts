import { RequestHandler } from "express";
import { compareProductConsumePerYear } from "../../services/productComparisonService";
import { Product } from "../interfaces/product";

export const getProductComparison: RequestHandler = (req, res, next) => {
    const consume = +req.params.consume;
    if (consume < 0) {
      res.status(422).send('Please send a valid consume');
    }

    const products = compareProductConsumePerYear(consume);

    res.json(products.map<Product>(product => {
      return {
        name: product.name,
        annualCostsInEuros: product.annualCostsInEuros
      }
    }))
}