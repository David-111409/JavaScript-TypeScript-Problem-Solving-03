function bubbleSort(ar) {
    let l = ar.length ;
    for (let i = 0; i < l - 1; i++) {
        for (let j = i + 1; j < l; j++) {
            if (ar[i] > ar[j]) {
                [ar[i], ar[j]] = [ar[j]] = [ar[j], ar[i]];
            }
        }
    }
}
let ar = [2,100, -100,  3, -1, 2, 5, -10,1000, 200,  10];
bubbleSort(ar);
console.log(ar);
