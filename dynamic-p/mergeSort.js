function sort(arr) {
    if (arr.length < 3) return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    const middle = Math.floor(arr.length / 2);
    const first = sort(arr.slice(0, middle));
    const sec = sort(arr.slice(middle));
    console.log();
    let res = []
    if (first && sec) {
        console.log(first, sec);
        for (i = 0; i < first.length + sec.length; i++) {
            // console.log((first[0], sec[0]));
            if (!first[0]) { res.push(...sec); break; }
            if (!sec[0]) { res.push(...first); break; }
            if (first[0] < sec[0]) res.push(first.shift())
            else res.push(sec.shift())
            console.log(res);
        }
    }
    console.log(res);
    return res
}

console.log(sort([1, 6, 4, 8, 3, 9, 2, 0]))