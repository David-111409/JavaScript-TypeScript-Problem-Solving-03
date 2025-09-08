String.prototype.zFill = function(width){
    let result = this;
    while (result.length < width){
        result = `0${result}`;
    }
    return result;
}

console.log("12".zFill(5));
