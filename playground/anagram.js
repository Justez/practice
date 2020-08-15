const anagram = (str1, str2) => {
    let string2 = str2.toLowerCase()
    if (str1.length === str2.length) {
        for(let index in str1.toLowerCase()) {
            string2 = string2.replace(new RegExp(str1[index]), "")
        }
        return !string2.length
    } else {
        return false
    }
}

const tests = () => {
    const result = anagram('aba', 'baA');
    console.log(result === true);

    const result1 = anagram('friend', 'Finder');
    console.log(result1 === true);

    const result2 = anagram('hello', 'bye');
    console.log(result2 !== true);
}

tests();