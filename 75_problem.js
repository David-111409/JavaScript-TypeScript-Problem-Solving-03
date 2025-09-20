/**
 ➞ "yes"

isPrime(primes, 4) ➞ "no"

isPrime(primes, 67) ➞ "yes"

isPrime(primes, 36) ➞ "no"
 */
const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
];
function isPrime(ar, t) {
    let left = 0,
        right = ar.length - 1,
        mid;

    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        if (ar[mid] === t) return "yes";
        else if (ar[mid] < t) left = mid + 1;
        else right = mid - 1;
    }
    return "no";
}


console.log(isPrime(primes, 3), "yes");
console.log(isPrime(primes, 4), "no");
console.log(isPrime(primes, 67), "yes");
console.log(isPrime(primes, 36), "no");

