const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(passed) {
  if (passed[0] == undefined) return 0;
	let total = 0;
	passed.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = function() {
  if(arguments[0] == undefined) return 0;
  let total = 1;
	for (let i = 0; i < arguments.length; i++) {
    total *= arguments[i];
  }
  return total;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
  let answer = n;
	if (n === 1 || n === 0) {
    return 1;
  }
  answer *= factorial (n - 1);
  return answer;

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
