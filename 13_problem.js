
// the start from here.
// let nums = [1, 2, 3];
// nums[10] = 11;

// for (let i = 0; i < nums.length; i++) {
//     console.log(i, nums[i]);
// }

// nums.forEach((ind, el) => console.log(el, ind));

// let ar = [1, 2];
// ar.length = 10;
// console.log(ar);
// ar.forEach((el) => console.log(el));

// console.log(['a', 'b' ] == ["a", "b"] + []);

let isInt = function (num) {
    return num % 1 === 0;
};
console.log(isInt(2));
console.log(isInt(2.5));
console.log(isInt(2.1));
console.log(isInt(1.0));
console.log(isInt("hello"));

let x = 10; // primitive
x.prop = "hello";
console.log(x.prop); // undefined ❌

let y = Number(10); // object
y.prop = "hello";
console.log(y.prop); // undefined

lg("good and hello");

function countBoomerangs(ar) {
    // let count = 0,
    //     l = ar.length - 2;

    // for (let i = 0; i < l; i++)
    //     // lg(ar[i]);
    //     if (ar[i] !== ar[i + 1] && ar[i] === ar[i + 2]) count++;

    // return count;
    // let l = ar.length - 2;
    // return ar.reduce((count, cur, ind) => {
    //     if (ind < l && cur !== ar[ind + 1] && cur === ar[ind + 2]) {
    //         count++;
    //     }
    //     return count;
    // }, 0);

    let l = ar.length - 2;
    return ar.filter(
        (el, ind) => ind < l && el === ar[ind + 2] && el !== ar[ind + 1]
    ).length;
}
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]), 2);
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]), 1);
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]), 0);
console.log(countBoomerangs([5, 9, 5, 9, 5]), 3);
console.log(countBoomerangs([4, 4, 4, 8, 4, 8, 4]), 3);
console.log(countBoomerangs([2, 2, 2, 2, 2, 2, 3]), 0);
console.log(countBoomerangs([2, 2, 2, 2, 3, 2, 3]), 2);
console.log(countBoomerangs([1, 2, 1, 1, 1, 2, 1]), 2);
console.log(countBoomerangs([5, 1, 1, 1, 1, 4, 1]), 1);
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]), 3);
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]), 5);
console.log(countBoomerangs([5, 5, 5]), 0);
