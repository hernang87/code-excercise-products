import MegaCoverage from '../models/Products/MegaCoverage';
import { expect } from 'chai';

const updatePriceForDays = (days, fc) => {
  for (let i = 0; i < days; i++) fc.updatePrice();
}

describe('MegaCoverage Tests', () => {
  let fc;
  let tests = [{
    sellIn: 0,
    price: 80
  }, {
    sellIn: 0,
    price: 80
  }, {
    sellIn: 0,
    price: 80
  }];

  beforeEach(() =>  {
    const name = 'Mega Coverage';
    const sellIn = 0;
    const price = 80;
    fc = new MegaCoverage(name, sellIn, price);
  });  
  
  it('should initialize the correct name', () => {        
    expect(fc.name).to.equal('Mega Coverage');
  });
  it('should initialize the correct sellin', () => {        
    expect(fc.sellIn).to.equal(0);
  });
  it('should initialize the correct price', () => {
    expect(fc.price).to.equal(80);
  });

  it('should not allow a price higher than 80', () => {
    const name = 'Mega Coverage';
    const sellIn = 0;
    const price = 85;
    fc = new MegaCoverage(name, sellIn, price);

    expect(fc.price).to.equal(80);
  })

  tests.forEach((test, index) => {
    it('should correctly update price after ' + (index + 1) + ' days', () => {    
      updatePriceForDays(index + 1, fc);
      
      expect(fc.price).to.equal(test.price);
      expect(fc.sellIn).to.equal(test.sellIn);
    });
  });


  
});