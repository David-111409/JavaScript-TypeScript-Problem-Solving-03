
function getIntersection(arr1, arr2) {
    // your code here
    let st = new Set();
    let stInter = new Set();

    for (let el1 of arr1) st.add(el1);

    for (let el2 of arr2) {
        if (st.has(el2)) stInter.add(el2);
    }
    return [...stInter];
}

console.log(getIntersection([1, 2, 3, 3, 4], [100, 2, 5, 3, 3, 4, 4, 4, 5]));
console.log(getIntersection([1, 2, 3], [3]));

// count('abbccc')
// // 'c'
// count('abbcccddd')

function count(str) {
    let map = new Map();
    let mx = 0;
    let ar = [];
    for (let char of str) {
        let c = (map.get(char) || 0) + 1;
        map.set(char, c);
        if (c > mx) {
            mx = c;
            ar = [char];
        } else if (c === mx) {
            ar.push(char);
        }
    }
    return ar.length > 1 ? ar : ar[0];
}
//     for (let [char, count] of map){
//         if (count === mx) ar.push(char);

//     }
//     return ar.length ? ar : ar[0];
// }
console.log(count("aaabbbccc"));
