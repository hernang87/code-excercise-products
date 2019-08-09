import Product from './Product';

class MegaCoverage extends Product {
  static MAX_PRICE: number = 80;

  updatePrice(): number {
    //console.log('MegaCoverage: updatePrice');
    return this.price;
  }  

  public getMaxPrice(): number {
    return MegaCoverage.MAX_PRICE;
  }
}

export default MegaCoverage;