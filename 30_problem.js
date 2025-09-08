function findSingle(ar) {
    // return ar.filter((el) => ar.indexOf(el) === ar.lastIndexOf(el));
    // let sorted = ar.sort();
    // let l = sorted.length;
    // for (let i = 0; i < l; i++) {
    //     let el = ar[i];
    //     if (el != ar[i + 1] && el != ar[i - 1]) return el;
    // }
    let result = 0;
    for (let el of ar){
        result ^= el;
    }
    return result;
}

console.log(findSingle([10, 2, 2, 1, 0, 0, 10, 1, -1]));

let obj = { a: 1, b: 2, c: 3 };
obj[Symbol.iterator] = function* () {
    for (let key in this) {
        yield [key, this[key]];
    }
};
for (let el of obj) {
    console.log(el);
}

function isPrimse(n) {
    if (n <= 1) return false;
    else if (n <= 3) return true;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

console.log(isPrimse(7));
