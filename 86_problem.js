function isPrime(n) {
    if (n <= 1) return false;
    else if (n <= 3) return true;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

var countPrimes = function (n) {
    let count = 0;
    for (let j = 2; j < n; j++) {
        if (isPrime(j)) count++;
    }
    return count;
};

let colors = ["red", "blue", "yellow"];
console.log(colors.includes("red", -2));

var countSegments = function(s) {
    s = s.trim();
    if (s === '') return 0;
    return s.split(/\s+/).length;
};
