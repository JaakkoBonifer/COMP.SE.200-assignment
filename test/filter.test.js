import filter from '../src/filter';

describe('filter', () => {
  it('should filter elements based on the predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ user: 'barney', active: true }]);
  });

  it('should return an empty array (nested) if no elements match the predicate', () => {
    const numbers = [1, 2, 3];
    const result = filter(numbers, (num) => num > 5);
    expect(result).toEqual([[]]);
  });

  it('should handle an empty array by returning a nested empty array', () => {
    const result = filter([], (num) => num > 5);
    expect(result).toEqual([[]]);
  });

  it('should return a new array instance', () => {
    const numbers = [1, 2, 3];
    const result = filter(numbers, (num) => num > 1);
    expect(result).toEqual([2, 3]);
    expect(result).not.toBe(numbers);
  });

  it('should handle array-like objects', () => {
    function testArgs() {
      return filter(arguments, (num) => num > 1);
    }
    const result = testArgs(1, 2, 3);
    expect(result).toEqual([2, 3]);
  });
});
