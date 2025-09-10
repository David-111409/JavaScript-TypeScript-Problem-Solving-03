function removeZeros(ar) {
    for (let i = ar.length - 1; i >= 0; i--) {
        if (ar[i] === 0) {
            ar.splice(i, 1);
            ar.push(0);
        }
    }
}

let ar = [1, 0, 0, 2, 3, 0, 4, 0, 0, 0, 0, 5, 0, 6, 0, 0, 7, 0, 0, 0, 8];
removeZeros(ar);
console.log(ar);
