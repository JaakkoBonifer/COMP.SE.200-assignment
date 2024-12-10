import capitalize from '../src/capitalize';

describe('capitalize', () => {
  it('should capitalize a lowercase string', () => {
    expect(capitalize('fred')).toBe('Fred');
  });

  it('should capitalize an uppercase string', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  it('should capitalize a mixed-case string', () => {
    expect(capitalize('fReD')).toBe('Fred');
  });

  it('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should treat non-string values as strings', () => {
    expect(capitalize(null)).toBe('Null');
    expect(capitalize(undefined)).toBe('Undefined');
    expect(capitalize(123)).toBe('123');
  });
});
