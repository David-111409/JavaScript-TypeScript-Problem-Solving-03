var moveZeroes = function (nums) {
    // let l = nums.length - 1;
    // for (let i = l ; i >= 0; i--){
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1);
    //         nums.push(0);
    //     }
    // }
    let pos = 0,
        l = nums.length;
    for (let i = 0; i < l; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    while (pos < nums.length) {
        nums[pos] = 0;
        pos++;
    }
    // return nums;
};

let nums = [1, 2, 0, 3, 0, 5, 0, 2, 0, 1];
moveZeroes(nums);
console.log(nums);
