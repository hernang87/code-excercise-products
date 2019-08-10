import FullCoverage from '../models/Products/FullCoverage';
import { expect } from 'chai';

const updatePriceForDays = (days, fc) => {
  for (let i = 0; i < days; i++) fc.updatePrice();
}

describe('FullCoverage Tests', () => {
  let fc;
  let tests = [];
  
  for(let i = 0; i < 30; i++) {
    let sellIn = 1 - i;
    let price = i > 1 
      ? 2 * i 
      : i + 1;

    tests.push({
      sellIn,
      price: price > 50 ? 50 : price
    })
  }

  beforeEach(() =>  {
    const name = 'Full Coverage';
    const sellIn = 2;
    const price = 0;
    fc = new FullCoverage(name, sellIn, price);
  });
  
  
  it('should initialize the correct name', () => {        
    expect(fc.name).to.equal('Full Coverage');
  });
  it('should initialize the correct sellin', () => {        
    expect(fc.sellIn).to.equal(2);
  });
  it('should initialize the correct price', () => {
    expect(fc.price).to.equal(0);
  });
  it('should not allow a price higher than 50', () => {
    const name = 'Full Coverage';
    const sellIn = 0;
    const price = 85;
    fc = new FullCoverage(name, sellIn, price);

    expect(fc.price).to.equal(50);
  })

  tests.forEach((test, index) => {
    it('should correctly update price after ' + (index + 1) + ' days', () => {    
      updatePriceForDays(index + 1, fc);
      
      expect(fc.price).to.equal(test.price);
      expect(fc.sellIn).to.equal(test.sellIn);
    });
  });

  
});