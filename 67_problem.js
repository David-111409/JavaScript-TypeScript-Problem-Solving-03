// mod(n,m)=((n%m)+m)%m

function mod(n, m) {
    return ((n % m) + m) % m;
}

console.log(mod(-13, 64), 51);
console.log(mod(50, 25), 0);
console.log(mod(-6, 3), 0);
console.log(mod(-45, 2), 1);
