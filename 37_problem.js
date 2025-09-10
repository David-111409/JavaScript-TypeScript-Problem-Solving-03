const a = [0];
console.log(a.length); // 1
a[3] = 3;
console.log(a.length); // 4

for (let item of a) {
    console.log(item); /* 0 undefined undefined 3 */
}
a.map((item) => {
    console.log(item); // 0 3
});
a.forEach((item) => {
    console.log(item); // 0 3
});
console.log(Object.keys(a));// '0' '3'
delete a[3];
console.log(a.length); // 4
a[2] = 2;  // [0 , 3 * empty items]
a.length = 1;
console.log(a[0], a[1], a[2]); // 0 undefined undefined

var x = Math.floor(Math.random());

if (x > 0.5) {
    var x = 1;
} else {
    // let x = 2;
    var x = 2;
}

console.log(x);  // if let then x = 0 and if var x = 2
