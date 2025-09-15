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
