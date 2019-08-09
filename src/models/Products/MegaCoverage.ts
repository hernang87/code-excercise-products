import Product from './Product';

class MegaCoverage extends Product {
  static MAX_PRICE: number = 80;

  updatePrice(): number {
    throw new Error("Method not implemented.");
  }  

  public getMaxPrice(): number {
    return MegaCoverage.MAX_PRICE;
  }
}

export default MegaCoverage;