import ceil from '../src/ceil';

describe('ceil', () => {
  it('should round up to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
  });

  it('should round up to the specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  it('should round up with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  it('should handle integers without rounding', () => {
    expect(ceil(5)).toBe(5);
  });

  it('should round up negative numbers correctly', () => {
    expect(ceil(-4.006)).toBe(-4);
  });
});
