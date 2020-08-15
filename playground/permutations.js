const permutate = input => {
    if (input.length < 2) return [input]
    let results = []
    for (let i in input) {
        const element = input[i]
        const remaining = [...input.slice(0,i), ...input.slice(+i+1)]
        for (var perm of permutate(remaining)) {
            results.push([element, ...perm].join(''))
        }
    }
    return results
}

(() => {
    console.log(permutate([1,2]).join('') === '1221')
    console.log(permutate([1,2,3]).join('') === '123132213231312321')
    console.log(permutate([1,2,3,4]).join('') === '123412431324134214231432213421432314234124132431312431423214324134123421412341324213423143124321')
})()