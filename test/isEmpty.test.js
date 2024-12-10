import isEmpty from '../src/isEmpty';

describe('isEmpty', () => {
  it('should return true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty collections', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for non-empty collections', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty(new Map([[1, 'one']]))).toBe(false);
    expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
    expect(isEmpty('abc')).toBe(false);
  });

  it('should return true for objects with no own enumerable properties', () => {
    function EmptyPrototype() {}
    EmptyPrototype.prototype.a = 1;
    const obj = new EmptyPrototype();
    expect(isEmpty(obj)).toBe(true);
  });

  it('should handle array-like objects', () => {
    function testArgs() {
      return isEmpty(arguments);
    }
    expect(testArgs()).toBe(true);
    expect(testArgs(1, 2)).toBe(false);
  });
});
