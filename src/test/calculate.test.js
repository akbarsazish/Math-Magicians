import calculate from '../logic/calculate';

const object = {
  total: 1,
  next: 2,
  operation: '+',
};

describe('operates output correctly', () => {
  it('clears output', () => {
    expect(() => calculate(object, 'AC').toBe({ total: null, next: null, operation: null }));
  });
  it('does not do anything when operating 0 with 0', () => {
    expect(() => calculate(object, '=').toBe({ total: 3, next: null, operation: null }));
  });
});

describe('calculate functions', () => {
  describe('function is numeric', () => {
    function isNumber(item) {
      return !!item.match(/[0-9]+/);
    }
    it('should return false when item is not a number', () => {
      const arg = ['', 'text'];
      arg.forEach((a) => {
        expect(isNumber(a)).toBe(false);
      });
    });
    it('should return true', () => {
      const arg = ['12', '  23  '];
      arg.forEach((a) => {
        expect(isNumber(a)).toBe(true);
      });
    });
  });
  describe('function calculate', () => {
    it('Should update the next: click a number without operation ', () => {
      const obj = {
        total: null,
        next: null,
        operation: null,
      };
      const buttonName = '5';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({
        total: null,
        next: '5',
      });
    });
    it('Should upadate the total, when = is clicked and obj has all values', () => {
      const obj = {
        total: '5',
        next: '2',
        operation: '+',
      };
      const buttonName = '=';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({
        total: '7',
        next: null,
        operation: null,
      });
    });
    it('Should clear All properties if AC is clicked', () => {
      const obj = {
        total: '5',
        next: '2',
        operation: '+',
      };
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({
        total: null,
        next: null,
        operation: null,
      });
    });
    it(
      `Should update totat: 
            when an operation 
            is clicked  when a total has been calculate`, () => {
        const obj = {
          total: '5',
          next: '3',
          operation: '+',
        };
        const buttonName = '-';
        const result = calculate(obj, buttonName);
        expect(result).toEqual({
          total: '8',
          next: null,
          operation: '-',
        });
      },
    );
  });
});
