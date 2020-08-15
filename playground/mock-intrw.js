/**
 *  find longest subsequense from two strings
 * |ABBA|, |ABCABA| => "ABBA".
 * |ABAZDC|, |BACBAD| => "ABAD"
 * remove non-shared letters;
 * for each s1 letter fetch sequence from s2 following s1 letter order
 * save each sequence in string array
 * find longest sequence out of array
 */

const longestSub = (s1, s2) => {
    const str2 = [...s2].filter(letter => s1.includes(letter));
    let result = [];

    getSubstringSequence = subst => {
        let second = str2.join('')
        let subsequence = ''
        for (char of subst) {
            const index = second.indexOf(char)
            if (index >= 0) {
                second = second.substr(index + 1);
                subsequence += char
            }
        }
        return subsequence
    }

    for (i in s1) {
        result.push(getSubstringSequence(s1.substr(i)));
    }

    result.sort((prev, curr) => prev.length > curr.length ? prev : curr);
    return result[0];
}

const tests = () => {
    const result1 = longestSub('abba', 'adwwwba');
    console.log(result1 === 'aba');

    const result2 = longestSub('aaaa', 'aa');
    console.log(result2 === 'aa');
}

tests();