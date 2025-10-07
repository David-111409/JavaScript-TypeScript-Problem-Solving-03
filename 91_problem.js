const isPalindromeNumber = (n) => {
  let k = n;
  let sum = 0;
  while (n) {
    sum = sum * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return sum === k;
};

console.log(isPalindromeNumber(112211));
console.log(isPalindromeNumber(1122));
