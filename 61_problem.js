console.log(undefined == undefined);
console.log(undefined === undefined);

function bubbleSort(ar) {
    let n = ar.length;
    for (let i = 0; i < n - 1; i++) {
        let swap = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (ar[j] > ar[j + 1]) [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
            swap = true;
        }
        if (!swap) break;
    }
}
let ar = [-1, 2, 10, 3, 20, -100, 2, 200];
let ar2 = [5, 3, 4, 8, 2];
bubbleSort(ar);
bubbleSort(ar2);
console.log(ar, ar2);

function selectionSort(ar) {
    let n = ar.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (ar[j] < ar[minIndex]) minIndex = j;
        }
        if (minIndex !== i) {
            [ar[i], ar[minIndex]] = [ar[minIndex], ar[i]];
        }
    }
}

let ar3 = [-1, 2, 10, -2, 200, 2, -5];
selectionSort(ar3);
console.log(ar3);
