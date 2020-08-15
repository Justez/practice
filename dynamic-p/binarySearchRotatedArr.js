function binaryRotated(arr, target) {
    let found
    function search(part, startIndex) {
        if (found === undefined) {
            const length = part.length;
            if (length === 1) {
                if (part[0] === target) found = startIndex
                return
            }
            const median = Math.round(length / 2)
            const startIndex2 = median + startIndex
            search(part.slice(0, median), startIndex)
            search(part.slice(median), startIndex2)
        }
    }
    search(arr, 0)
    return found !== undefined ? found : -1;
}

const test = () => {
    console.log(5 === binaryRotated([5, 6, 7, 8, 9, 10, 1, 2, 3], 10));
    console.log(1 === binaryRotated([3, 1, 2], 1));
    console.log(-1 === binaryRotated([3, 5, 1, 2], 6));
}

test()