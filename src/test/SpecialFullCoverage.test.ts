import SpecialFullCoverage from '../models/Products/SpecialFullCoverage';
import { expect } from 'chai';

const updatePriceForDays = (days: number, fc: SpecialFullCoverage) => {
  for (let i = 0; i < days; i++) fc.updatePrice();
}

type TestData = {
  days: number;
  sellIn: number;
  price: number;
}

describe('SpecialFullCoverage Tests', () => {
  let fc: SpecialFullCoverage;
  const tests: TestData[] = [{
    days: 0,
    sellIn: 15,
    price: 20
  }, {
    days: 1,
    sellIn: 14,
    price: 21    
  }, {
    days: 4,
    sellIn: 11,
    price: 24    
  }, {
    days: 5,
    sellIn: 10,
    price: 25    
  }, {
    days: 6,
    sellIn: 9,
    price: 27    
  }, {
    days: 9,
    sellIn: 6,
    price: 33    
  }, {
    days: 15,
    sellIn: 0,
    price: 50    
  }, {
    days: 20,
    sellIn: -5,
    price: 0    
  }];  

  beforeEach(() =>  {
    const name = 'Special Full Coverage';
    const sellIn = 15;
    const price = 20;
    fc = new SpecialFullCoverage(name, sellIn, price);
  });  
  
  it('should initialize the correct name', () => {        
    expect(fc.name).to.equal('Special Full Coverage');
  });
  it('should initialize the correct sellin', () => {        
    expect(fc.sellIn).to.equal(15);
  });
  it('should initialize the correct price', () => {
    expect(fc.price).to.equal(20);
  });
  it('should not have a price higher than 50', () => {
    const name = 'Special Full Coverage';
    const sellIn = 0;
    const price = 85;
    fc = new SpecialFullCoverage(name, sellIn, price);

    expect(fc.price).to.equal(50);
  });

  it('should not have a price lower than 0', () => {
    const name = 'Special Full Coverage';
    const sellIn = 0;
    const price = -5;
    fc = new SpecialFullCoverage(name, sellIn, price);

    expect(fc.price).to.equal(0);
  });    


  tests.forEach((test: TestData) => {
    it('should correctly update price after ' + test.days + ' days', () => {    
      updatePriceForDays(test.days, fc);      
      expect(fc.price).to.equal(test.price);
      expect(fc.sellIn).to.equal(test.sellIn);
    });
  })

  
});