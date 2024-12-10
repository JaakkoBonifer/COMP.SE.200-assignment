import upperFirst from '../src/upperFirst';

describe('upperFirst', () => {
  it('should capitalize the first character of a string', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  it('should handle strings that are already capitalized', () => {
    expect(upperFirst('FRED')).toBe('FRED');
  });

  it('should handle empty strings', () => {
    expect(upperFirst('')).toBe('');
  });

  it('should handle single-character strings', () => {
    expect(upperFirst('f')).toBe('F');
  });
});
