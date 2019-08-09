import Product from './Product';

class MegaCoverage extends Product {
  updatePrice(): number {
    throw new Error("Method not implemented.");
  }
}

export default MegaCoverage;