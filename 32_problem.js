String.prototype.zFill = function(width){
    let result = this;
    while (result.length < width){
        result = `0${result}`;
    }
    return result;
}

console.log("12".zFill(5));

String.prototype.sayLoveMe = function () {
    return `I love you, ${this}`;
};
console.log("dawoud".sayLoveMe());
