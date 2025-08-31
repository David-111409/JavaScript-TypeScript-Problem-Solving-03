// let ar = [1, 2, 3, 4, 5];
// let x = [...ar.copyWithin()];
// let y = ar.copyWithin();
// let z = JSON.parse(JSON.stringify(ar));
// ar.push(6);
// console.log(x, y === ar, z !== ar);

// if ([] == []) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// console.log("Good");
// setTimeout(() => {
//     for (let i = 0; i < 100_000_00000; i++) {}
//     console.log("From time out");
// }, 0);

// let p = new Promise((res, rej) => {
//     for (let i = 0; i < 100000000; i++) {}
//     res("From Promise");
// }).then((res) => console.log(res));

// console.log("hello");

function limitNumber(l1, l2, n) {
    let lower = Math.min(l1, l2);
    let upper = Math.max(l1, l2);
    if (n <= upper && n >= lower) return n;
    else if (n < lower) return lower;
    return upper;
}
console.log(limitNumber(5, 1, 10), 5);
console.log(limitNumber(-3, 1, 10), 1);
console.log(limitNumber(14, 1, 10), 10);
console.log(limitNumber(4.6, 1, 10), 4.6);
console.log(limitNumber(-100, -73, -70), -73);
console.log(limitNumber(2, -73, -70), -70);
console.log(limitNumber(-71.5, -73, -70), -71.5);
console.log(limitNumber(7, 8, 8.1), 8);
console.log(limitNumber(9, 8, 8.1), 8.1);
console.log(limitNumber(8.05, 8, 8.1), 8.05);
console.log(limitNumber(16, 16, 16), 16);
console.log(limitNumber(-1, 16, 16), 16);
console.log(limitNumber(800, 16, 16), 16);
