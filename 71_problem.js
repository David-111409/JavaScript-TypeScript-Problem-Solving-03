/*
sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// 2 + 4 + 6 + 8 + 9

sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29

sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
 */
const ar = [1, 2 ,3, 4, 5, 6];
const sum = ar.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const sumMissingNumbers = (ar) => {
    let start = ar[0],
        end = ar[0],
        l = ar.length,
        sum = 0,
        st = new Set();

    for (let i = 0; i < l; i++) {
        st.add(ar[i]);
        if (ar[i] < start) start = ar[i];
        else if (ar[i] > end) end = ar[i];
    }
    for (let j = start + 1; j < end; j++) {
        if (!st.has(j)) sum += j;
    }
    return sum;
    // return st;
    // return [start, end];
};

console.log(sumMissingNumbers([1, 3, 5, 7, 10]), 29);
console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]), 1575);
console.log(sumMissingNumbers([7, 3, 8, 5, 12]), 40);
console.log(sumMissingNumbers([99, 2, 45, 4, 17]), 4782);
console.log(sumMissingNumbers([10, 7, 5, 3, 1]), 29);
console.log(sumMissingNumbers([7, 8, 9, 10]), 0);
