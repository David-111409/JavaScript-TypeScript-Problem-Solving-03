const ar = [1, 2, [2, 3], [[2]], [[[[[3]]]]]];
function flat(ar) {
    return ar.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, []);
}
console.log(flat(ar));

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const obj1 = { name: "hager", city: { name: "cairo" } };
let clone = deepClone(obj1);

clone.name = "Khaled";
console.log(clone, obj1);

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    
    return true;
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("cac"));
