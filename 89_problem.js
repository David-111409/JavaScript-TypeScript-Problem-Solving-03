//  ➞ [[2, 3], [4, 5]]

// chunkify( ➞ [[2, 3], [4, 5], [6]]

// chunkify([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]

// chunkify([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]

// chunkify([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]

function chunkify(ar, n) {
  let chunks = [];
  let l = ar.length;
  
  for (let i = 0; i < l; i += n) {
    let chunk = ar.slice(i, i + n);
    chunks.push(chunk);
  }
  
  return chunks;
}

console.log(chunkify([2, 3, 4, 5], 2), [
  [2, 3],
  [4, 5],
]);

console.log(chunkify([2, 3, 4, 5, 6], 2), [[2, 3], [4, 5], [6]]);

console.log(chunkify([2, 3, 4, 5, 6, 7], 3), [
  [2, 3, 4],
  [5, 6, 7],
]);

console.log(chunkify([2, 3, 4, 5, 6, 7], 1), [[2], [3], [4], [5], [6], [7]]);
console.log(chunkify([2, 3, 4, 5, 6, 7], 7), [[2, 3, 4, 5, 6, 7]]);
console.log(chunkify([2, 3, 4, 5], 3), [[2, 3, 4], [5]]);
console.log(chunkify([2, 3, 4, 5, 6, 7, 8], 3), [[2, 3, 4], [5, 6, 7], [8]]);

/**
Burglary Series (05): Third Most Expensive
Time to call your lover to inform what he/she lost in the burglary.

Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.

Examples

thirdMostExpensive({}) ➞ false

thirdMostExpensive({ piano: 100, tv: 200 }) ➞ false

thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })  ➞ "stereo"

thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }) ➞ "mirror"
Notes

All prices will be of different monetary values.
 */

function thirdMostExpensive(obj) {
  let ar = Object.entries(obj);
  let l = ar.length;
  if (l < 3) {
    return false;
  }
  
  let first = [-Infinity, -Infinity];
  let second = [-Infinity, -Infinity];
  let third = [-Infinity, -Infinity];

  for (let el of ar) {
    // return [el[1], first[1]];
    if (el[1] > first[1]) {
      third = second;
      second = first;
      first = el;
    } else if (el[1] > second[1]) {
      third = second;
      second = el;
    } else if (el[1] > third[1]) {
      third = el;
    }
  }
  return third[0];
}

console.log(thirdMostExpensive({}), false);
console.log(thirdMostExpensive({ piano: 100 }), false);
console.log(thirdMostExpensive({ piano: 100, stereo: 200 }), false);
console.log(thirdMostExpensive({ piano: 100, stereo: 200, tv: 10 }), "tv");
console.log(
  thirdMostExpensive({ piano: 100, stereo: 200, tv: 10, timmy: 500 }),
  "piano"
);
console.log(
  thirdMostExpensive({
    computer: 1000,
    piano: 500,
    stereo: 200,
    tv: 10,
    timmy: 1,
  }),
  "stereo"
);
