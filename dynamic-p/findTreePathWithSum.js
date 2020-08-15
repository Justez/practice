function pathSumSearch(tree, sum) {
    let counter = 1;
    let paths = [];
    let finished = [];
    while (tree.length) {
        const root = tree.splice(0, counter);
        if (!paths.length) paths.push(root[0]);
        counter = root.filter(i => i !== 'N').length * 2;
        const leaves = tree.slice(0, counter);
        console.log(root, leaves, paths);
        paths = leaves.map(l => paths.map(p => p+l)).flat()
        paths.forEach((el, index) => {
            (typeof el) === 'string' && finished.push(paths.splice(index, 1)) 
        });
        console.log(paths, finished);
    };
    return counter;
};

const test = () => {
    // console.log(1 === pathSumSearch([1, 2, 3]), 4);
    // console.log(0 === pathSumSearch([1, 2, 3]), 2);
    console.log(1 === pathSumSearch([1, 2, 3, 'N', 'N', 4, 6, 'N', 5, 'N', 'N', 7, 'N']), 8);
    // console.log(1 === pathSumSearch([1, 2, 3, 'N', 'N', 4, 6, 'N', 5, 'N', 'N', 7, 'N']), 100);
};

test();