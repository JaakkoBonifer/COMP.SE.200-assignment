import add from "../src/add.js";

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  it('should add two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10);
  });

  it('should add a positive and a negative number', () => {
    expect(add(6, -4)).toBe(2);
  });

  it('should return the other number if one is zero', () => {
    expect(add(0, 4)).toBe(4);
    expect(add(6, 0)).toBe(6);
  });

  it('should add two floating-point numbers', () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });
});
