import operate from '../logic/operate';

describe('operates two numbers', () => {
  it('sums', () => {
    expect(() => operate(1, 2, '+').toBe(3));
  });
  it('subtracts', () => {
    expect(() => operate(1, 2, '-').toBe(-1));
  });
  it('multiplies', () => {
    expect(() => operate(1, 2, 'x').toBe(2));
  });
  it('divides', () => {
    expect(() => operate(1, 2, '÷').toBe(1.5));
  });
  it('returns rest', () => {
    expect(() => operate(4, 2, '%').toBe('0'));
  });
})