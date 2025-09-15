function isPrime(n) {
    if (n <= 1) return false;
    else if (n <= 3) return true;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function primeInRange(s, e) {
    while (s <= e) {
        if (isPrime(s)) return true;
        s++;
    }
    return false;
}
let [intVector, resVector] = [
    [
        [10, 12],
        [62, 66],
        [441, 445],
        [0, 2],
        [20, 22],
        [4444, 5555],
        [114, 120],
    ],
    [true, false, true, true, false, true, false],
];
for (let i in intVector)
    console.log(primeInRange(...intVector[i]), resVector[i]);
