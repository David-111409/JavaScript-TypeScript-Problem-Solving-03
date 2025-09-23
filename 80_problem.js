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
