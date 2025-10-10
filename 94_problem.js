function sqrt(n) {
  if (n < 2) return n;
  
  let left = 0;

  let right = n;
  
  let mid, s;
  
  while (right - left > 1e-6) {
    mid = (left + right) / 2;
    s = mid * mid;
    if (s > n) {
      right = mid;
    } else {
      left = mid;
    }
  }
  let x = Math.round(mid);
  
  if (x * x <= n) return x;
  
  return x - 1;
}

console.log(sqrt(24));

const nam = "hager";
const nums = "12345";
console.log(Array.from(nam));
console.log(Array.from(nums, n => 2 * n));

let ar = [1, 1, 2, 2, 3, 4, 5, 5];
let st = new Set(ar);
console.log(Array.from(st));
console.log([...st]);

console.log(
  ar.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, [])
);

function testArgs() {
  // return typeof arguments;
  return Array.from(arguments, (el) => typeof el === "number" ? el : "not a number");
}
console.log(testArgs("hello", 1, 2, 3, 4, "dawoud"));
