let ar = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [[[4, 5]]]
];

console.log(ar.flat(Infinity));

function flatAr(ar, i = 0){
    if (i === ar.length ) return [];

    return Array.isArray(ar[i]) ? [...flatAr(ar[i]), ...flatAr(ar, i+1)]  : [ar[i], ...flatAr(ar, i+1)];
}

console.log(flatAr(ar));
