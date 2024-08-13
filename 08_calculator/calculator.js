const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2
	
};

const sum = function(arr) {
	if(arr == [])
  {
    return 0;
  }
  else
  {
    let total = 0;
    arr.forEach(element => {
      total += element;
    });
    return total;
  }
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(base, power) {
  return base ** power;
	
};

const factorial = function(num) {
  fact = 1;
  if(num == 0 || num == 1) return fact;
  else
  {
    for(let i = 2; i <= num; i++)
    {
      fact *= i;
    }
    return fact;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
