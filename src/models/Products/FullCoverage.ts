import Product from './Product';

class FullCoverage extends Product {
  updatePrice(): number {
    throw new Error("Method not implemented.");
  }
}

export default FullCoverage;