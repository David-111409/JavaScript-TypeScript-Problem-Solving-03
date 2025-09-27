var reverseVowels = function (s) {
    let ar = s.split("");
    let l = s.length;
    let r = [];
    let vowels = "aeiouAEIOU";
  
    for (let i = 0; i < l; i++) {
        if (vowels.includes(ar[i])) r.push(i);
    }
  
    let left = 0;
    let right = r.length - 1;
  
    while (left < right) {
        [ar[r[left]], ar[r[right]]] = [ar[r[right]], ar[r[left]]];

        left++;
        right--;
    }
  
    return ar.join("");
};

console.log(reverseVowels("leetcode"));
