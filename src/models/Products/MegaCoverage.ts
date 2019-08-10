import Product from './Product';

class MegaCoverage extends Product {
  static MAX_PRICE: number = 80;

  constructor(name: String, sellIn: number, price: number) {
    const p = price > MegaCoverage.MAX_PRICE 
      ? MegaCoverage.MAX_PRICE
      : price;

    super(name, sellIn, p);
  }

  updatePrice(): number {
    return this.price;
  }  

  public getMaxPrice(): number {
    return MegaCoverage.MAX_PRICE;
  }
}

export default MegaCoverage;