const ar = [4, 5, 7, 8, 9, 11, 12, 97, 47];
// to find the largest prime number

function isPrime(n) {
    if (n <= 1) return false;
      
    else if (n <= 3) return true;
      
    else if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6)
        if (n % i === 0 || n % (i + 2) === 0) return false;

    return true;
}

function largestPrime(ar) {
    let big = ar.at(0);

    for (let el of ar) if (el > big && isPrime(el)) big = el;

    return big;
}
console.log(largestPrime(ar));

// to remove duplicates from array

function removeDuplicate(ar) {
    return [...new Set(ar)];
}

console.log(removeDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5]));
console.log(removeDuplicate(["khaled", "hager", "hager", "khaled", "sarah", "sarah", "dawoud", "dawoud"]));
