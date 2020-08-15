function findMaxOccurred(arr) {
    const register = {};
    arr.forEach(el => {
        register[el] = register[el] !== undefined ? register[el] + 1 : 1
    })
    const result = Object.entries(register).sort(([ak, av], [bk, bv]) => bv - av)
    return result[0][1] > arr.length/2 ? result[0][1] : -1
}

const test = () => {
    console.log(3 === findMaxOccurred([3, 1, 3, 3, 2]));
    console.log(-1 === findMaxOccurred([1, 2, 3]));
}

test()