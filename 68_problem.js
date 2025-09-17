/**
canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Duplicate 7s not found in target array.

canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Missing 6 from target array.
 */
function canConcatenate(ars, target) {
    return (
        String(ars.flat().sort((a, b) => a - b)) ===
        String(target.sort((a, b) => a - b))
    );
}
console.log(
    canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]),
    true
);
console.log(
    canConcatenate(
        [
            [2, 1, 3],
            [5, 4, 7, 6],
        ],
        [1, 2, 3, 4, 5, 6, 7]
    ),
    true
);
console.log(
    canConcatenate(
        [
            [2, 1, 3],
            [5, 4, 7, 6],
        ],
        [7, 6, 5, 4, 3, 2, 1]
    ),
    true
);
console.log(
    canConcatenate(
        [
            [2, 1, 3],
            [5, 4, 7, 6, 7],
        ],
        [1, 2, 3, 4, 5, 6, 7]
    ),
    false
);
console.log(
    canConcatenate(
        [
            [2, 1, 3],
            [5, 4, 7],
        ],
        [1, 2, 3, 4, 5, 6, 7]
    ),
    false
);
console.log(canConcatenate([[1, 4], [3]], [1, 3, 4]), true);
console.log(canConcatenate([[1, 4], [3]], [1, 2, 3, 4]), false);
console.log(canConcatenate([[1, 4], [3]], [4, 3, 1]), true);
console.log(
    canConcatenate(
        [
            [1, 4],
            [2, 3],
        ],
        [4, 3, 1, 2]
    ),
    true
);
console.log(canConcatenate([[1], [2], [3, 4]], [4, 3, 1, 2]), true);
console.log(canConcatenate([[1], [2], [3], [4]], [4, 3, 1, 2]), true);
