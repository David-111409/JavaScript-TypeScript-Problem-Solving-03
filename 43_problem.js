console.log(Array.from({ length: 10 }, (_, i) => i));
console.log(Array(10).fill(0).map((_, i) => i));
console.log([...Array(10).keys()]);
