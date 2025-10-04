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
