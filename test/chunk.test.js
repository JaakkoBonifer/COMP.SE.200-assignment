import chunk from '../src/chunk';

describe('chunk', () => {
  it('should split an array into chunks of the specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  it('should handle an empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should return an empty array if size is 0 or less', () => {
    expect(chunk(['a', 'b', 'c'], 0)).toEqual([]);
    expect(chunk(['a', 'b', 'c'], -1)).toEqual([]);
  });

  it('should default to size 1 if size is not provided', () => {
    expect(chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
  });

  it('should convert size to an integer if given a non-integer value', () => {
    expect(chunk(['a', 'b', 'c', 'd'], '2')).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 2.5)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  it('should return an empty array if the input array is null or undefined', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  it('should handle cases where the array cannot be evenly divided', () => {
    expect(chunk(['a', 'b', 'c'], 2)).toEqual([['a', 'b'], ['c']]);
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 3)).toEqual([['a', 'b', 'c'], ['d', 'e']]);
  });

  it('should handle sizes larger than the array length gracefully', () => {
    expect(chunk(['a', 'b', 'c'], 10)).toEqual([['a', 'b', 'c']]);
  });

  it('should handle invalid or NaN size values gracefully', () => {
    expect(chunk(['a', 'b', 'c'], NaN)).toEqual([['a'], ['b'], ['c']]);
    expect(chunk(['a', 'b', 'c'], 'invalid')).toEqual([['a'], ['b'], ['c']]);
  });
});
