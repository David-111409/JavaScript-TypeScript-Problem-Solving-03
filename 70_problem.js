function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = { address: "cairo" };
// Person.call(p1, "Khaled", 25);
// Person.apply(p1, ["Hager", 15]);
// let pBind = Person.bind(p1, "Sarah", 32);
// pBind();
Person.bind(p1, "Muhammad", 28)();
console.log(p1);

console.log(5 + 5 + "h");
console.log(5 + "h" + 5);

/**
memeSum(26, 39) ➞ 515
// 2+3 = 5, 6+9 = 15
// 26 + 39 = 515

memeSum(122, 81) ➞ 1103
// 1+0 = 1, 2+8 = 10, 2+1 = 3
// 122 + 81 = 1103

memeSum(1222, 30277) ➞ 31499
 */
function memeSum(n1, n2) {
    let first = `${n1}`;
    let second = `${n2}`;
    let l1 = first.length;
    let l2 = second.length;
    let mxLength = Math.max(l1, l2);
    let sum = "";

    if (l1 < l2) first = first.padStart(mxLength, "0");
    else if (l1 > l2) second = second.padStart(mxLength, "0");

    for (let i = 0; i < mxLength; i++) {
        sum += `${+first[i] + +second[i]}`;
    }
    return Number(sum);
}

console.log(memeSum(2, 11) === 13);
console.log(memeSum(0, 1) === 1);
console.log(memeSum(0, 0) === 0);
console.log(memeSum(16, 18) === 214);
console.log(memeSum(26, 39) === 515);
console.log(memeSum(122, 81) === 1103);
console.log(memeSum(1222, 30277) === 31499);
console.log(memeSum(38810, 1383) === 391193);
console.log(memeSum(1236, 30977) === 31111013);
console.log(memeSum(49999, 49999) === 818181818);
