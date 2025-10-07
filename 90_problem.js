var twoSum = function (nums, target) {
   // solution fast
    let seen = new Map();
  
    let l = nums.length;
  
    for (let i = 0; i < l; i++) {
      let complement = target - nums[i];
      if (seen.has(complement)) return [i, seen.get(complement)];
      seen.set(nums[i], i);
    }
  // Solution slow
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
};

let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(nums1, target1));


let nums2 = [3, 2, 4];
let target2 = 6;
console.log(twoSum(nums2, target2));


let nums3 = [3, 3];
let target3 = 6;
console.log(twoSum(nums3, target3));
/**
 * 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */
for (let i = 0; i < 5; i++) {
  // let i = i + 2;
  // i = i + 2;
  let i = 5;
  console.log(i);
}
