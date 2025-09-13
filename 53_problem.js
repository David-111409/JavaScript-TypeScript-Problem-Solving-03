function elementAfter(ar, target) {
    let left = 0,
        right = ar.length - 1,
        ind,
        mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (ar[mid] === target) {
            ind = mid;
            left = mid + 1;
        } else if (ar[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return ar[ind + 1];
}

console.log(elementAfter([1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 9, 10, 20], 10));
