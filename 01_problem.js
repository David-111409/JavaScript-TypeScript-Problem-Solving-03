const squarePatch = (n) => {
    let ar = Array(n);
    for (let i = 0; i < n; i++) {
        ar[i] = Array(n);
        // for (let j = 0; j < n; j++) ar[i][j] = n;
        ar[i].fill(n);
    }
    return ar;
};

console.log(squarePatch(3));
console.log(squarePatch(4));
console.log(squarePatch(5));
console.log(squarePatch(1));
console.log(squarePatch(0));
