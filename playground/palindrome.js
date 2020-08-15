const palindrome = string => {
    const input = string.trim().toLowerCase();
    const reverse = input.split('').reverse().join('');
    return input === reverse;
}

const tests = () => {
    const result = palindrome('aba');
    console.log(result === true);

    const result1 = palindrome('racecar');
    console.log(result1 === true);

    const result2 = palindrome('table');
    console.log(result2 !== true);
}

tests();