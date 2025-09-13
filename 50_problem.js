function largestDiff(ar) {
    if (!ar.length) return 0;
    // let big = ar[0],
    //     small = ar[0];
    // for (let i = 1; i < ar.length; i++) {
    //     if (ar[i] > big) big = ar[i];
    //     else if (ar[i] > small) small = ar[i];
    // }
    // let dif = big - small;
    // return dif < 0 ? -1 * dif : dif;
    return Math.abs(Math.max(...ar) - Math.min(...ar));
}

console.log(largestDiff([1, 2, 3, 4, 5, 6]));
console.log(largestDiff([]));

function firstIndex(ar, t) {
    let left = 0,
        right = ar.length - 1,
        mid,
        ind = -1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (ar[mid] === t) {
            ind = mid;
            right = mid - 1;
        } else if (ar[mid] < t) left = mid + 1;
        else right = mid - 1;
    }
    return ind;
}

console.log(firstIndex([0, 1, 2, 3, 3, 4, 4, 4], 4));
console.log(firstIndex([1, 11], 11));

console.log(firstIndex([1, 2, 3, 3, 3, 4, 4, 4, 4, 100, 1000, 10000], 3));

function lastIndex(ar, t) {
    let left = 0,
        right = ar.length - 1,
        mid,
        ind = -1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (ar[mid] === t) {
            ind = mid;
            left = mid + 1;
        } else if (ar[mid] < t) left = mid + 1;
        else right = mid - 1;
    }
    return ind;
}

console.log(lastIndex([1, 2, 2, 2], 2));
