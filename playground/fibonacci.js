const fibo = iterationCount => {
    const arr = [0, 1];
    for (i = 2; i <= iterationCount; i++) {
        const result = arr.slice(-2).reduce((prev, curr) => prev + curr, 0)
        arr.push(result);
    }
    return arr[iterationCount]
}

const fibonacci = num => {
    if (num < 2) return num
    return fibonacci(num - 1) + fibonacci(num - 2)
}

const tests = () => {
    const result = fibo(3);
    console.log(result === 2);

    const result1 = fibo(5);
    console.log(result1 === 5);

    const result2 = fibo(1);
    console.log(result2 === 1);

    const result3 = fibo(9);
    console.log(result3 === 34);

    const result4 = fibonacci(9)
    console.log(result4 === 34);
}

tests();