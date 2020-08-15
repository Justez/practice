const fibonacci = (num) => {
    if (num < 2) return num
    return fibonacci(num-1) + fibonacci(num-2)
}

const factorial = (num, sum = num) => {
    if (num === 1) return num;
    return factorial(num-1) * sum;
}

const reverseString = (string) => {
    if (!string) return string;
    return reverseString(string.substr(1)) + string[0]
}

const rangeInclusive = (x, y) => {
    if (x === y) return [y];
    const numbers = rangeInclusive(x, y-1);
    numbers.push(y)
    return numbers;
}

const range = (x, y) => {
    if (x + 2 === y) return [x + 1];
    const numbers = range(x, y-1);
    numbers.push(y-1)
    return numbers;
}

const arraySum = (arr) => {
    if (!arr.length) return 0;
    return arr.pop() + arraySum(arr)
}

const exponent = (number, base) => {
    if (!base) return 1;
    return number * exponent(number, base-1);
}

const isEven = (num) => {
    const number = Math.abs(num);
    if (number === 0) return true;
    if (number < 2) return false;
    return isEven(number - 2)
}

const binarySearch = (input, query) => {
    if (input.length === 1) {
        return input[0] === query ? query : false
    }

    const median = parseInt(input.length / 2)
    const firstHalf = input.slice(0, median)
    const secondHalf = input.slice(median);

    if (query <= firstHalf.slice(-1)[0]) {
        return binarySearch(firstHalf, query)
    }
    if (query >= secondHalf[0]) {
        return binarySearch(secondHalf, query)
    }
}

const test = () => {
    console.log(fibonacci(9) === 34);
    console.log(factorial(5) === 120);
    console.log(reverseString('cat') === 'tac');
    console.log(rangeInclusive(2, 11).length === 10);
    console.log(range(2, 11).length === 8);
    console.log(arraySum([1,2,3,4,5,6]) === 21)
    console.log(exponent(3, 3) === 27);
    console.log(isEven(6.44) !== true);
    console.log(binarySearch([0,1,2,3,4,5,6,7,8], 5));
}

test()