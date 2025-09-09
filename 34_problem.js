console.log(2 ** 3);
console.log(Math.pow(2, 3));

function* range(from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    }
}
for (let num of range(3, 10)) {
    console.log(num);
}

function addComma(n) {
    let integer = parseInt(n);
    if (integer === n){
        return n.toLocaleString();
    }
    else {
        let [, after] = `${n}`.split(".");
        return integer.toLocaleString() + "." + after;
    }
}
console.log(addComma(1)); // '1'
console.log(addComma(1000)); // '1,000'
console.log(addComma(-12345678)); // '-12,345,678'
console.log(addComma(12345678.12345)); // '12,345,678.12345'
console.log(addComma(-.12345)); // '12,345,678.12345'
