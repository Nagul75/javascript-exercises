const repeatString = function(str, num) {
    let totalString= "";
    if (num < 0)
    {
        return "ERROR"
    }
    for(let i = 0; i < num; i++)
    {
        totalString += str
    }
    return totalString
};

// Do not edit below this line
module.exports = repeatString;
