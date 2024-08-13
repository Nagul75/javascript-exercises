const fibonacci = function(num) {
    if (typeof(num) == String) num = parseInt(num);
    if (num < 0) return "OOPS";
    let fibonacci = [0, 1, 1];
    let f1 = fibonacci[1], f2 = fibonacci[2];
    for(let i = 3; i <= num; i++)
    {
        let sum = f1 + f2;
        fibonacci.push(sum);
        f1 = f2;
        f2 = sum;
    }
    return fibonacci[num];
};

// Do not edit below this line
module.exports = fibonacci;
