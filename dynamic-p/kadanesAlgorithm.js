function kadanes(arr) {
    let best_sum = arr.reduce((p,c) => p+c, 0)
    let current_sum = 0
    for (x in arr) {
        current_sum = Math.max(0, current_sum + arr[x])
        best_sum = Math.max(best_sum, current_sum)
    }
    return best_sum
}

function brutebutdynamic(arr) {
    let best
    for (let index = 0; index < arr.length; index++) {
        arr.slice(index).reduce((p, c) => {
            best = best !== undefined ? Math.max(best, p+c) : p+c
            return p+c
        }, 0)
    }
    
    return best
}

const test = () => {
    console.log(9 === kadanes([1,2,3,-2,5]));
    console.log(6 === kadanes([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
    console.log(-1 === kadanes([-1,-2,-3,-4]));
    console.log(9 === brutebutdynamic([1,2,3,-2,5]));
    console.log(6 === brutebutdynamic([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
    console.log(-1 === brutebutdynamic([-1,-2,-3,-4]));
}

test()