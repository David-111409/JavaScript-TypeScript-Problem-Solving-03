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
    while (pos < l) {
        nums[pos] = 0;
        pos++;
    }
    // return nums;
};

let nums = [1, 2, 0, 3, 0, 5, 0, 2, 0, 1];
moveZeroes(nums);
console.log(nums);

var isPowerOfThree = function (n) {
    while (n >= 3) {
        n = n / 3;
    }
    return n === 1;
};

console.log(isPowerOfThree(243));

var isHappy = function (n) {
    let sum = 0;

    while (n !== 1 && n !== 4) {
        while (n) {
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }
        n = sum;
        sum = 0;
    }

    return n === 1;
};
