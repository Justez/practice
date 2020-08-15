function missing(n, arr) {
    let found;
    const find = (part) => {
        if (!found) {
            const median = Math.round((part.slice(-1)[0] - part[0])/2)
            if (part.length <= 2) {
                if (part.length === 2 && part[0] + 1 !== part[1]) found = part[0] + 1
                return
            }
            const half1 = find(part.slice(0, median));
            const half2 = find(part.slice(median));
            return half1||half2
        }
    }
    if (arr[0] !== 1) return 1
    if (arr[n-2] !== n) return n
    find(arr)
    return found
}

const test = () => {//assume it will be sorted
    console.log(4 === missing(5, [1, 2, 3, 5]));
    console.log(9 === missing(10, [1, 2, 3, 4, 5, 6, 7, 8, 10]));
    console.log(10 === missing(10, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
}
test()