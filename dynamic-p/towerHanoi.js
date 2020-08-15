function hanoi(towers, disks) {
    let sequence = new Array(towers).fill([])
    sequence[0] = new Array(disks).fill(0).map((undefined, i) => i+1)
    for (i in sequence[0])
        move(0, sequence)
    function move(index, sequence) {
        console.group(index, sequence)
        const disk = sequence[index].shift();
        if (!sequence[index].length) {
            if (!sequence[towers-1].length) sequence[towers-1].unshift(disk)
        } else {
            
        }
        console.log(sequence);
        console.groupEnd()
    }
    // console.log(sequence);
}

const test = () => {
    // hanoi(2,1);
    hanoi(3,2);
    // hanoi(3,4);
}

test()