function keypair(sum, nums) {
    const arr = nums.filter(n => n < sum).sort((a, b) => b - a)
    return arr.some((v, i) => {
        const remaining = sum - v
        const found = arr.slice(i).find(val => val === remaining)
        // console.log(i, arr.slice(i), found);
        return found
    })
}

const test = () => {
    console.log(keypair(16, [1, 4, 45, 6, 10, 8]));
    console.log(keypair(10, [1, 2, 4, 3, 6]));
    console.log(!keypair(146, [61, 719, 754, 140, 424, 280, 997, 688, 530, 550, 438, 867, 950, 194, 196, 298, 417, 287, 106, 489, 283, 456, 735, 115, 702, 317, 672, 787, 264, 314, 356, 186, 54, 913, 809, 833, 946, 314, 757, 322, 559, 647, 983, 482, 145, 197, 223, 130, 162, 536, 451, 174, 467, 45, 660, 293, 440, 254, 25, 155, 511, 746, 650, 187, 314, 475, 23, 169, 19, 788, 906, 959, 392, 203, 626, 478, 415, 315, 825, 335, 875, 373, 160, 834, 71, 488, 298, 519, 178, 774, 271, 764, 669, 193, 986, 103, 481, 214, 628, 803, 100, 528, 626, 544, 925, 24, 973, 62, 182, 4, 433, 506, 594]));
}

test()