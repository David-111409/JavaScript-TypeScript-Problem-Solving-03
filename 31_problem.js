function parse(input, len) {
    let fValue = parseInt(input.slice(0, 2), 16);
    let sValue = parseInt(input.slice(2, 4), 16);
    let tValue = parseInt(input.slice(4, 6), 16);
    if (len === 6) return `rgba(${fValue},${sValue},${tValue},1)`;
    if (len === 8) {
        let alpha =
            Math.round((100 * parseInt(`0x${input.slice(6, 8)}`)) / 255) / 100;
        return `rgba(${fValue},${sValue},${tValue},${alpha})`;
    }
}
function hexToRgb(hex) {
    let pure = hex.replace("#", "");
    let l = pure.length;
    if (l === 3 || l === 4) {
        let [first, second, third, fourth] = [...pure];
        pure = `${first}${first}${second}${second}${third}${third}`;
        if (!fourth) {
            return parse(pure, 2 * l);
        } else {
            pure = `${pure}${fourth}${fourth}`;
            return parse(pure, 2 * l);
        }
    } else if (l === 6 || l === 8) {
        return parse(pure, l);
    } else throw new Error("not valid hex value;");
}
