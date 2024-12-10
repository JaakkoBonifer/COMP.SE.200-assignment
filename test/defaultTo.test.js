import defaultTo from '../src/defaultTo';

describe('defaultTo', () => {
  it('should return the value if it is not null, undefined, or NaN', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo('hello', 'default')).toBe('hello');
  });

  it('should return the defaultValue if value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  it('should return the defaultValue if value is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  it('should return NaN as is instead of the defaultValue', () => {
    expect(defaultTo(NaN, 10)).toBeNaN();
  });

  it('should handle edge cases with falsy values', () => {
    expect(defaultTo(false, 'default')).toBe(false);
    expect(defaultTo(0, 'default')).toBe(0);
    expect(defaultTo('', 'default')).toBe('');
  });
});
