function elementBefore(ar, target) {
    let left = 0,
        right = ar.length - 1,
        mid,
        ind ;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (ar[mid] === target) {
            ind = mid;
            right = mid - 1;
        } else if (ar[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return ar[ind - 1];
}
console.log(elementBefore([1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5], 1));
