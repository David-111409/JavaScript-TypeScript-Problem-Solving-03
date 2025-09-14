// const A = ['A', 'B', 'C', 'D', 'E', 'F']
// const B = [1,   5,   4,   3,   2,   0]
// You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.

// For above example A should be modified inline to following

// ['F', 'A', 'E', 'D', 'C', 'B']
// sort(["A", "B", "C", "D", "E", "F"], [1, 5, 4, 3, 2, 0]);
function sort(items, order) {
    // let ar = [];
    // for (let i = 0; i < items.length; i++) {
    //     ar[order[i]] = items[i];
    // }
    // return ar;
    let map = new Map();
    for (let i = 0; i < items.length; i++) {
        map.set(order[i], items[i]);
    }
    for (let i =0; i < items.length ;i++){
        items[i] = map.get(i);
    }
}

let items = ["A", "B", "C", "D", "E", "F"];
sort(items, [1, 5, 4, 3, 2, 0]);
console.log(items);
