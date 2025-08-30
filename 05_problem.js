function calculateYears(n) {
    // if (n === 1) return [1, 15, 15];
    return [
        n,
        n === 1 ? 15 : 24 + (n - 2) * 4,
        n === 1 ? 15 : 24 + 5 * (n - 2),
    ];
}

console.log(calculateYears(1), [1, 15, 15]);
console.log(calculateYears(2), [2, 24, 24]);
console.log(calculateYears(10), [10, 56, 64]);
console.log(calculateYears(20), [20, 96, 114]);
console.log(calculateYears(65), [65, 276, 339]);
console.log(calculateYears(43), [43, 188, 229]);
console.log(calculateYears(100), [100, 416, 514]);
