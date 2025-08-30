function memo() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = n;
            return "Not Found";
        }
    };
}
// let first = memo();
// console.log(first(20));
// console.log(first(20));
// console.log(first(20));
// console.log(first(30));
// console.log(first(30));

function makePositive(n) {
    return Math.abs(n);
}

function addByTen(n) {
    return n + 10;
}

function compose(make, add) {
    return function (n) {
        return add(make(n));
    };
}
const makePositiveAndAddByTen = compose(makePositive, addByTen);
console.log(makePositiveAndAddByTen(-10));
