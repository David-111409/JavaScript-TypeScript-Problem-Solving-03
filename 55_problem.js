console.log(topK([1, 500, 2, 10, 12, 3, 4, 5, 6], 4));
function topK(ar, num) {
    return ar.sort((a, b) => b - a).slice(0, num);
}
