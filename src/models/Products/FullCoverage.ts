import Product from './Product';

class FullCoverage extends Product {
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