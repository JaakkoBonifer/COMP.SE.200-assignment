import reduce from '../src/reduce';

describe('reduce', () => {
  it('should reduce an array to a single value', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6);
  });

  it('should reduce an object to a single value', () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (acc, value, key) => {
        (acc[value] || (acc[value] = [])).push(key);
        return acc;
      },
      {}
    );
    expect(result).toEqual({ 1: ['a', 'c'], 2: ['b'] });
  });

  it('should use the first element as the accumulator if none is provided', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6);
  });

  it('should handle empty collections gracefully', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).toBe(0);
    expect(reduce({}, (sum, n) => sum + n, 0)).toBe(0);
  });
});
