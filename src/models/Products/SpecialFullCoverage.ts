import FullCoverage from './FullCoverage';

class SpecialFullCoverage extends FullCoverage {
  updatePrice(): number {
    this._sellIn--;
    
    if (this.sellIn >= 10) {
      this._price++;
    } else if (this.sellIn < 10 && this.sellIn >= 5) {
      this._price += 2;
    } else if (this.sellIn < 5 && this.sellIn >= 0) {
      this._price += 3;
    } else {
      this._price = 0;
    }

    return this.price;
  }
}

export default SpecialFullCoverage;