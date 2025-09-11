console.log(Array.from({ length: 10 }, (_, i) => i));
console.log(Array(10).fill(0).map((_, i) => i));
console.log([...Array(10).keys()]);
console.log(Array.from([1, 2, 3], x => x * 2));
console.log([1, 2, 3].map(x => x * 2));

const ar = [2, 4, 5, 10, 12, 20];

// to find the last element of the array without using length property
console.log(ar.at(-1));
ar.push(500);
console.log(ar.at(-1));

// let val;
// for (let v of ar) {
//     val = v;
// }
// console.log(val);
function print(n){
    if (n <= 1){
        print(n + 1);
        console.log("x in if block is " , n);
    }
    else if (n >= 10000000000000){
        console.log("x in else if block is " , n);
        
    }
    print(n + 1);
}
print(0); // Maximum call stack size exceeded
