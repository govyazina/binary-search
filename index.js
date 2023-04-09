// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(arr, elem) {
    const searchRec = (arr, elem, start, end) => {
        const i = Math.ceil((end + start) / 2)
        if (arr[i] === elem) {
            return i
        }
        if (start === end) {
            return -1
        }
        if (arr[i] < elem) {
            start = i + 1
        }
        if (arr[i] > elem) {
            end = i - 1
        }
        return searchRec(arr, elem, start, end)
    }
    return searchRec(arr, elem, 0, arr.length - 1)
}

module.exports = binarySearch
