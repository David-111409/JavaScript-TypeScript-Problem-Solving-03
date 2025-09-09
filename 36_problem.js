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
