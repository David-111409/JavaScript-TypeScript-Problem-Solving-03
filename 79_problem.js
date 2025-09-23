var insertionSortList = function (head) {
    let key, j;
    let n = head.length;
    for (let i = 1; i < n; i++) {
        key = head[i];
        j = i - 1;
        while (j >= 0 && head[j] > key) {
            head[j + 1] = head[j];
            j--;
        }
        head[j + 1] = key;
    }
    return head;
};

console.log(insertionSortList([4, 2, 1, 3]));

var maxValue = function (n, x) {
    if (n > 0) {
        let ar = `${n}`.split("").map(Number);
        ar.push(x);
        ar.sort((a, b) => b - a);
        return +ar.join("");
    } else {
        let ar = `${-n}`.split("").map(Number);
        ar.push(x);
        ar.sort((a, b) => a - b);
        return -ar.join("");
    }
};

console.log(maxValue(-12, 8));



function insertion(ar){
    let key, j, n = ar.length;
    for (let i = 1; i < n; i++){
        key = ar[i];
        j = i - 1;
        while (j >= 0 && ar[j] > key){
            ar[j+1] = ar[j];
            j--;
        }
        ar[j+1] = key;
    }
}

let ar = [-1, 2, -5, 3, -10, 100];
insertion(ar);
console.log(ar);
