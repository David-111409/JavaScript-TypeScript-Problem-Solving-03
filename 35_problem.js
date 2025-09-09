function flatAr(ar, i = 0) {
    if (i === ar.length) return [];
    return Array.isArray(ar[i])
        ? [...flatAr(ar[i]), ...flatAr(ar, i + 1)]
        : [ar[i], ...flatAr(ar, i + 1)];
}
// function flatAr(ar){
//     return ar.flat(Infinity);
// }

console.log(flatAr([[1, 2], [3, 4], [5, 6], [10, 2], [-5]]));
console.log(flatAr([1, [2, 3]]));
console.log(flatAr([1, [2, [3, 4]], [[[[[3]]]]]]));
