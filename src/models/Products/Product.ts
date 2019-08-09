abstract class Product {
  protected _sellIn: number;
  protected _price: number;
  
  static MAX_PRICE: number = 50;
  
  public getSellIn(): number {
    return this._sellIn;
  }

  public getPrice(): number {
    return this._price;
  }

  public getMaxPrice(): number {
    return Product.MAX_PRICE;
  }

  abstract updatePrice(): number;  
}

export default Product;