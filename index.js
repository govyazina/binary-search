// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(arr, elem) {
    const searchRec = (start, end) => {
        const i = Math.ceil((end + start) / 2)
        if (arr[i] === elem) {
            return i
        }
        if (start === end) {
            return -1
        }
        return arr[i] < elem
            ? searchRec(i + 1, end)
            : searchRec(start, i - 1)
    }
    return searchRec(0, arr.length - 1)
}

module.exports = binarySearch
