function duplicate(ar) {
    for (let i = ar.length - 1; i >= 0; i--) {
        if (ar[i] === ar[i - 1]) ar.splice(i - 1, 1);
    }
}

let ar = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
duplicate(ar);
console.log(ar);

function findTwo(ar) {
    let map = new Map();
    ar.forEach((ele, i) => {
        if (!map.has(ele)) map.set(ele, i);
    });
    for (let i = 0; i < ar.length; i++) {
        let num = ar[i];
        if (map.has(-num)) {
            return [i, map.get(-num)];
        }
    }
    return null;
}
console.log(findTwo([ 2, 3, -1, 1,-2, 1, -1]));
console.log(findTwo([1, 2, 3, 4, 5, 6]));
