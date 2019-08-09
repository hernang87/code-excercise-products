import FullCoverage from './FullCoverage';

class SpecialFullCoverage extends FullCoverage {
  updatePrice(): number {
    throw new Error("Method not implemented.");
  }
}

export default SpecialFullCoverage;