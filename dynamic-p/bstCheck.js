function BSTCheck(arr) {
    let counter = 1;
    let valid = true;
    while (arr.length) {
        const root = arr.splice(0, counter);
        counter = root.filter(i => i !== 'N').length * 2;
        const leaves = arr.slice(0, counter);
        if (leaves.length) {
            valid &= root.filter(i => i !== 'N').every((node, index) => {
                const wtf = leaves
                    .slice(index * 2, (index + 1) * 2)
                    .every((val) => val !== 'N' ? val > node : true);
                return (node === 'N' || wtf);
            });
        };
    };
    return valid;
};

const test = () => {
    console.log(1 === BSTCheck(['1', '2', '3', 'N', 'N', '4', '6', 'N', '5', 'N', 'N', '7', 'N']));
    console.log(0 === BSTCheck(['2', 'N', '7', 'N', '6', 'N', '5', 'N', '9', 'N', '2', 'N', '6']));
};

test();