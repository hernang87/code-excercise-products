abstract class Product {
  protected _sellIn: number;
  protected _price: number;
  
  public getSellIn(): number {
    return this._sellIn;
  }

  public getPrice(): number {
    return this._price;
  }

  abstract updatePrice(): number;
}

export default Product;