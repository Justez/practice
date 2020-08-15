const fizzbuzz = (limit) => {
    let result = [];
    if (limit >= 1) {
        for(i = 1; i <= limit; i++) {
            const fizz = !(i % 3) ? 'fizz' : '';
            const buzz = !(i % 5) ? 'buzz' : '';            
            
            result.push(`${fizz}${buzz}${(!fizz && !buzz) ? i : ''}`);
        }
    }
    return result
}


const tests = () => {
    const result = fizzbuzz(3);
    console.log(result.join('') === '12fizz')

    const result1 = fizzbuzz(7);
    console.log(result1.join('') === '12fizz4buzzfizz7')

    const result2 = fizzbuzz(15);
    console.log(result2.join('') === '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz')
}

tests();