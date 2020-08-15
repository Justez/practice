const vovels = ['a', 'e', 'i', 'o', 'u'];

const vovelCount = string => {
    const stringArr = string.toLowerCase().split('')
    if (stringArr.length) {
        return stringArr.reduce((prev, letter) => {
            return prev + (vovels.includes(letter) ? 1 : 0)
        }, 0)
    } else return false
}

const vovelCount2 = str => {
    const matched = str.match(/[aeiou]/gi)
    return matched ? matched.length : 0
}

const tests = () => {
    const result = vovelCount('aBBa');
    console.log(result === 2);

    const result1 = vovelCount('racecar');
    console.log(result1 === 3);

    const result2 = vovelCount('table');
    console.log(result2 === 2);

    const result3 = vovelCount2('aBBa');
    console.log(result3 === 2);

    const result4 = vovelCount2('racecar');
    console.log(result4 === 3);

    const result5 = vovelCount2('table');
    console.log(result5 === 2);
}

tests();