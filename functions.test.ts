const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const arr = [ 1, 2, 3, 4, 5];
    test('should return array of the same length', () => {
        const results = shuffleArray(arr);
        expect(Array.isArray(results)).toBe(true);
        expect(results.length).toBe(arr.length);
    });

    test('should contain the same numbers in the argument', () => {
        const results = shuffleArray(arr);
        expect(results).toEqual(expect.arrayContaining(arr))
    })
})