const binarySearch = require('../index')

describe('binary search', function () {
    test('Функция должна возвращать индекс элемента', () => {
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4)
        expect(binarySearch(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 'G')).toBe(6)
    })

    test('Функция должна быть определена', () => {
        expect(binarySearch).toBeDefined()
    })

    test('Функция должна возвращать -1, если элемента не существует в данном массиве', () => {

        expect(binarySearch([1,  3,  5], 2)).toBe(-1)
        expect(binarySearch([1,  3, 4, 5], 2)).toBe(-1)
        expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toBe(-1)
        expect(binarySearch(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 'X')).toBe(-1)
    })
});
