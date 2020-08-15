const palindrome = input => {
    const string = input.trim().toLowerCase();
    const reverse = input.split('').reverse().join('')
    return string === reverse
}

const occurrence = (matchText, string) => {
    const regex = new RegExp(matchText, 'g')
    const result = string.match(regex)
    return result.length;
}

const duplicate = arr => {
    return [...new Set(arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item)))]
}

const tests = () => {
    console.log(palindrome('asa') === true);
    console.log(palindrome('level') === true);
    console.log(palindrome('onetwothree') !== true);
    
    console.log(occurrence('o','onetwothree') === 2);
    console.log(occurrence('e','onetwothree') === 3);
    console.log(occurrence('t','onetwothree') === 2);

    console.log(duplicate([1,2,4,5,4,5,6,2,3]));
}

tests()