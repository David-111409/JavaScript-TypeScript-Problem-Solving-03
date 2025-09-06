function isTriangle(x1, y1, x2, y2, x3, y3) {
    const area = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
    return area !== 0; // true if triangle, false if not
}

function round(n) {
    return Math.round(n * 100) / 100;
}
function centroid(x1, y1, x2, y2, x3, y3) {
    if (isTriangle(x1, y1, x2, y2, x3, y3)) {
        let x = (x1 + x2 + x3) / 3;
        let y = (y1 + y2 + y3) / 3;

        return [round(x), round(y)];
    }
    
    return false;
}
console.log(centroid(0, 0, 3, 0, 3, 3), [2.0, 1.0]);
console.log(centroid(5, 3, -3, -2, -1, 4), [0.33, 1.67]);
console.log(centroid(2, 2, 8, -2, 0, -3), [3.33, -1.0]);
console.log(centroid(5, 3, 5, -1, -4, 1), [2.0, 1.0]);
console.log(centroid(-1, -3, 1, 3, 2, 6), false);
console.log(centroid(3, 0, 0, 3, 6, 3), [3.0, 2.0]);
