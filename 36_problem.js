function sum(a, b, c, d) {
    if (b && c && d) return { value: a + b + c + d };
    return function (b) {
        return function (c) {
            return function (d) {
                return { value: a + b + c + d };
            };
        };
    };
}

console.log(sum(1)(2)(3)(4).value);
console.log(sum(1, 2, 3, 4).value);
console.log(sum(4)(6)(8)(10).value);
console.log(sum(4, 6, 8, 10).value);

var x = Math.floor(Math.random());
// console.log(x);
if (x > .5 /* and test for x === 0 */) {
    var x = 1;
} else {
    var x = 2;
}

console.log(x); // x output: 2 as var is not a block scope.
