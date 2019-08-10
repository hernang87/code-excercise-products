import Product from './Product';

class SuperSale extends Product {  
  constructor(nname: String, sellIn: number, price: number) {
    const p = price > SuperSale.MAX_PRICE 
    ? SuperSale.MAX_PRICE
    : price;

    super(name, sellIn, p);
  }

  updatePrice(): number {
    this._sellIn--;

    this._price = this.sellIn > 0 
      ? this.price - 1
      : this.price - 2
    
    if(this.price < 0) this._price = 0;

    return this.price;
  }    
}

export default SuperSale;