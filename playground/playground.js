const binarySearch = (inputarr, query) => {
    if (inputarr.length === 1) return query === inputarr[0] ? query : false;
    const middle = Math.floor(inputarr.length / 2);
    const first = inputarr.slice(0, middle);
    const second = inputarr.slice(middle);
    if (first.slice(-1)[0] >= query) return binarySearch(first, query)
    if (second[0] <= query) return binarySearch(second, query)
}

const binarySort = (arr) => {
    if (arr.length === 2) return (arr[0] > arr[1] ? [arr[1], arr[0]] : arr)
    const middle = Math.floor(arr.length / 2);
    const first = arr.slice(0, middle);
    const second = arr.slice(middle);
    const result1 = binarySort(first);
    const result2 = binarySort(second);
    var result = (result1.slice(-1)[0] > result2[0] ? [...result2, ...result1] : [...result1, ...result2]);
    console.log('log', result);
    result.push(...result)
    
    return result
}

const test=() => {
    console.log(binarySearch([1,2,3,4,5,6,7], 5) === 5);
    console.log(binarySort([4,2,7,9,0,1,99,3]));
}

test()