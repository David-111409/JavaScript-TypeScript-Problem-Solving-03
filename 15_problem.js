function shiftToRight(n, p) {
    return Math.floor(n / Math.pow(2, p));
}

const opCheck = (f) => !`${f}`.match(RegExp(">>", "gm"));
console.log(shiftToRight),
    false,
    "The use of right shift operator (>>) is prohibited!";

let [numVector, resVector] = [
    [
        [80, 3],
        [-24, 2],
        [-5, 1],
        [38, 0],
        [192, 4],
        [4666, 6],
        [3777, 6],
        [1024, 5],
        [-512, 10],
    ],
    [10, -6, -3, 38, 12, 72, 59, 32, -1],
];
for (let i in numVector)
    console.log(shiftToRight(...numVector[i]), resVector[i]);
