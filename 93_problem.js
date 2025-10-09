var findComplement = function (num) {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((el) => (el === "1" ? "0" : "1"))
      .join(""),
    2
  );
};

console.log(findComplement(5));

var bitwiseComplement = function(n) {
    let mask = (1 << n.toString(2).length) - 1;
  
    return mask ^ n;
};

console.log( (0 ?? 1) || 2 ); // output: 2

var removeElement = function (nums, val) {
  let pos = 0;
  let k = pos;
  let l = nums.length;

  for (let i = 0; i < l; i++) {
    if (nums[i] !== val) {
      nums[pos] = nums[i];
      pos++;
    }
  }
  
  k = pos;

  while (pos < l) {
    nums[pos] = "_";
    pos++;
  }

  return k;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;

// Output: 5, (nums = [0, 1, 4, 0, 3, _, _, _]);

console.log(removeElement(nums, val));

console.log(nums);
