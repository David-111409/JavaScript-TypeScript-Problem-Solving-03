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


var isPalindrome = function(n) {
    let nString = String(n);
    return nString.split("").reverse().join("") === nString;
    
};

function pairSum(ar, target) {
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j] === target)) return [i, j];
    }
  }
  //   let map = new Map();
  //   for (let i = 0; i < ar.length; i++) {
  //     let c = target - ar[i];
  //     if (map.has(c)) {
  //       return [map.get(c), i];
  //     }
  //     map.set(ar[i], i);
  //   }
}

console.log(pairSum([2, 0, 1, 3], 4));

// time : o(n), space : o(n)
