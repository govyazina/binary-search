// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(arr, elem, start, end) {
    let indexStart = start === undefined ? 0 : start
    let indexEnd = end === undefined ? arr.length - 1 : end
    let i = Math.ceil((indexEnd + indexStart) / 2)
    if (arr[i] === elem) {
        return i
    }
    if (indexStart === indexEnd) {
        return -1
    }
    if (arr[i] < elem) {
        indexStart = i + 1
    }
    if (arr[i] > elem) {
        indexEnd = i - 1
    }
    return binarySearch(arr, elem, indexStart, indexEnd)
}

module.exports = binarySearch

/*
[1 3 5]
o, 2
1
[1]


 */