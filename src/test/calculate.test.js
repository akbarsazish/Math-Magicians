import calculate from '../logic/calculate';

const object = {
  total: 1,
  next: 2,
  operation: '+', 
}

describe('operates output correctly', () => {
  it('clears output', () => {
    expect(() => calculate(object, 'AC').toBe({total: null, next: null, operation: null}));
  });
  it('does not do anything when operating 0 with 0', () => {
    expect(() => calculate(object, '=').toBe({total: 3, next: null, operation: null}));
  });
})