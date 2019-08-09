import IPrice from './IPrice';

abstract class Product implements IPrice {
  protected _name: String;
  protected _sellIn: number;
  protected _price: number;
  
  static MAX_PRICE: number = 50;

  constructor(name, sellIn, price) {
    this._name = name;
    this._sellIn = sellIn;
    this._price = price;
  }

  get name(): String {
    return this._name;
  }
  
  get sellIn(): number {
    return this._sellIn;
  }

  get price(): number {
    return this._price;
  }

  public getMaxPrice(): number {
    return Product.MAX_PRICE;
  } 

  abstract updatePrice(): number;
}

export default Product;