const reverseString = function(str) {
    let charArray = str.split('');
    reversedString = ""
    for(let i = charArray.length-1; i >= 0; i--)
    {
        reversedString += charArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
