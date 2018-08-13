function wrap (string, column) {
    if (string.length <= column){
        return string;
    }
    const indexOfBlank = string.lastIndexOf(' ', column);
    let split;
    let offset;
    if (indexOfBlank > -1){
        split = indexOfBlank;
        offset = 1;
    } else {
        split = column;
        offset = 0;
    }

    return string.substring(0, split) + '\n' + wrap(string.substring(split + offset), column);
}
module.exports = wrap;


//for (var i = 0; i < string.length; i++){
    //         const secondString = string.slice(0, column);
    //         secondString += ${"string \n"}; 
    //     }
    //     return secondString;
    // }