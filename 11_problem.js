// console.log(5 << 2);

function shiftToLeft(n1, n2) {
    // return n1 << n2;
    return n1 * Math.pow(2, n2);
}
const opCheck = (f) => !`${f}`.match(RegExp("<<", "gm"));
console.log(
    opCheck(shiftToLeft),
    false,
    "The use of left shift operator (<<) is prohibited!"
);

let [numVector, resVector] = [
    [
        [5, 2],
        [10, 3],
        [-32, 2],
        [-6, 5],
        [12, 4],
        [46, 6],
        [57, 0],
        [79, 1],
    ],
    [20, 80, -128, -192, 192, 2944, 57, 158],
];
for (let i in numVector)
    console.log(shiftToLeft(...numVector[i]), resVector[i]);
