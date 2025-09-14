function sum(a, b) {
    return [a, b];
}

console.log(sum((a = 2), (b = 3)));
console.log(sum((b = 3), (a = 2)));

function newSum({ a, b }) {
    return [a, b];
}

console.log(newSum({ a: 2, b: 3 }));
console.log(newSum({ b: 3, a: 2 }));


// named parameters
