import toNumber from '../src/toNumber';

describe('toNumber', () => {
  it('should return the input if it is already a number', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  it('should convert string representations of numbers to numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber(' 42 ')).toBe(42);
  });

  it('should handle binary, octal, and hexadecimal strings correctly', () => {
    expect(toNumber('0b101')).toBe(5);
    expect(toNumber('0o77')).toBe(63);
    expect(toNumber('0x1A')).toBe(26);
  });

  it('should return NaN for invalid numeric strings', () => {
    expect(toNumber('abc')).toBeNaN();
    expect(toNumber('0xGHI')).toBeNaN();
  });

  it('should handle objects with a numeric `valueOf` method', () => {
    const obj = {
      valueOf() {
        return 42;
      },
    };
    expect(toNumber(obj)).toBe(42);
  });

  it('should handle symbols by returning NaN', () => {
    expect(toNumber(Symbol('test'))).toBeNaN();
  });

  it('should handle non-numeric inputs', () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });
});
