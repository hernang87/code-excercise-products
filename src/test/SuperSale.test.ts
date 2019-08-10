import SuperSale from '../models/Products/SuperSale';
import { expect } from 'chai';

const updatePriceForDays = (days, fc) => {
  for (let i = 0; i < days; i++) fc.updatePrice();
}

type TestData = {
  days: number;
  sellIn: number;
  price: number;
}

describe('SuperSale Tests', () => {
  let fc: SuperSale;
  const tests: TestData[] = [{
    days: 0,
    sellIn: 3,
    price: 6
  }, {
    days: 1,
    sellIn: 2,
    price: 5    
  }, {
    days: 2,
    sellIn: 1,
    price: 4    
  }, {
    days: 6,
    sellIn: -3,
    price: 0    
  }];
   

  beforeEach(() =>  {
    const name = 'Super Sale';
    const sellIn = 3;
    const price = 6;
    fc = new SuperSale(name, sellIn, price);
  });
  
  
  it('should initialize the correct name', () => {        
    expect(fc.name).to.equal('Super Sale');
  });
  it('should initialize the correct sellin', () => {        
    expect(fc.sellIn).to.equal(3);
  });
  it('should initialize the correct price', () => {
    expect(fc.price).to.equal(6);
  });
  it('should not allow a price higher than 50', () => {
    const name = 'Super Sale';
    const sellIn = 0;
    const price = 85;
    fc = new SuperSale(name, sellIn, price);

    expect(fc.price).to.equal(50);
  });
  it('should not have a price lower than 0', () => {
    const name = 'SuperSale';
    const sellIn = 0;
    const price = -5;
    fc = new SuperSale(name, sellIn, price);

    expect(fc.price).to.equal(0);
  });    

  tests.forEach((test: TestData) => {
    it('should correctly update price after ' + (test.days ) + ' days', () => {    
      updatePriceForDays(test.days, fc);
      
      expect(fc.price).to.equal(test.price);
      expect(fc.sellIn).to.equal(test.sellIn);
    });
  });

  
});