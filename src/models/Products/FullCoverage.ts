import Product from './Product';

class FullCoverage extends Product {
  constructor(name: String, sellIn: number, price: number) {
    const p = price > FullCoverage.MAX_PRICE 
    ? FullCoverage.MAX_PRICE
    : price;

    super(name, sellIn, p);
  }

  updatePrice(): number {
    this._sellIn--;

    const multiplier = this.sellIn >= 0 ? 1 : 2;

    this._price = this.price < this.getMaxPrice() 
      ? this.price + multiplier 
      : this.getMaxPrice();
      
    return this.price;
  }
}

export default FullCoverage;