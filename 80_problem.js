function first(nums, target) {
    let left = 0,
        right = nums.length - 1,
        mid;
    let ind = -1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            ind = mid;
            right = mid - 1;
        } else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return ind;
}
function last(nums, target) {
    let left = 0,
        right = nums.length - 1,
        mid;
    let ind = -1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            ind = mid;
            left = mid + 1;
        } else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return ind;
}
var searchRange = function (nums, target) {
    return [first(nums, target), last(nums, target)];
};
console.log(searchRange([1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4], 4));


var plusOne = function (digits) {
    let l = digits.length,
        i = 1;
    let res = digits[l - i] + 1;
    if (res < 10) {
        digits[l - i] = res;
        // return digits;
    }
    while (res === 10) {
        digits[l - i] = 0;
        i++;
        res = digits[l - i] + 1 || 1;
        if (l - i === -1) {
            // digits.unshift(1);
            // digits = [1, ...digits];
            for (let k = l; k > 0 ; k--){
                digits[k] = digits[k-1];
            }
            digits[0] = 1;
            
        } else digits[l - i] = res;
    }
    return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([8]));
console.log(plusOne([1, 0, 9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
console.log(plusOne([9, 9, 9]));

