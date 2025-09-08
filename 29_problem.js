function firstDuplicate(str) {
  
    let map = new Map();
  
    for (let l of str) {
        let c = (map.get(l) || 0) + 1;
        if (c === 2) return l;
        map.set(l, c);
    }
  
    return null;
}

console.log(firstDuplicate("abcdef"));
