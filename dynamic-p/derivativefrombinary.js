function isDerivative(der, number){
    const rest = number
    const num = +rest.shift()
    if (!rest.length) {
        return !(num % der)
    }
    const remainder = rest.reduce((p,c) => p+c, 0) % der
    const possibleRange = new Array(Math.ceil(10/der)).fill(0).map((undefined,i) => i ? der*i - remainder : (!remainder ? 0 : undefined)).filter(v => v)
    return possibleRange.includes(num) && isDerivative(der, rest)
}

function decode(binary, der) {
    let sum = 0;
    binary.split('').reverse().reduce((powSum,flag) => { sum += +flag*powSum; return powSum*2 }, 1);
    return isDerivative(der, (''+sum).split('')) // or just sum % 3
}

const test = () => {
    console.log(decode('011', 3));
    console.log(!decode('100', 3));
}

test()