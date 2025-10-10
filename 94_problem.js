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
