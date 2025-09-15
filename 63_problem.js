function insertionSort(ar) {
    let n = ar.length;
    for (let i = 1; i < n; i++) {
        let key = ar[i];
        let j = i - 1;
        while (j >= 0 && ar[j] > key) {
            ar[j + 1] = ar[j];
            j--;
        }
        ar[j + 1] = key;
    }
}
let ar = [-1, 2, 10, -2, 3, 5, -10];
insertionSort(ar);
console.log(ar);

function quickSort(ar) {
    let n = ar.length;
    if (n <= 1) return ar;
    let left = [];
    let right = [];
    let pivot = ar[n - 1];
    for (let i = 0; i < n - 1; i++) {
        if (ar[i] < pivot) left.push(ar[i]);
        else right.push(ar[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

let a = [-100, 2, 2, -2, 3, 10];
console.log(quickSort(a));
