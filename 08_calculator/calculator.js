const add = function(operand1, operand2) {
	return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(number => sum += number);
	return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(number => product *= number);
	return product;
};

const power = function(operand1, operand2) {
	return operand1 ** operand2;
};

const factorial = function(operand) {
  let product = 1;

	for (let i = 1; i <= operand; i++) {
    product *= i;
  }

  return product;
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
