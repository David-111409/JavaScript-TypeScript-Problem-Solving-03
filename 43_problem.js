console.log(Array.from({ length: 10 }, (_, i) => i));
console.log(Array(10).fill(0).map((_, i) => i));
console.log([...Array(10).keys()]);
console.log(Array.from([1, 2, 3], x => x * 2));
console.log([1, 2, 3].map(x => x * 2));
