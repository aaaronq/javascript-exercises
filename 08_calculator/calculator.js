const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

// const sum = function(...numbers) {
//   if (numbers.length === 0 || numbers[0].length === 0) return 0;
//   if (Array.isArray(numbers[0])) {
//     return numbers[0].reduce((total, number) => {
//       return total + number;
//     });
//   }
//   else {
//     let sumof = numbers.reduce((total, number) => {
//       return total + number;
//     });
//     return sumof;
//   }
// }

const sum = function(array) {
  return array.reduce((total, number) => total + number, 0);
}

const multiply = function(array) {
  return array.reduce((total, number) => total * number);
};

const power = function(a, b) {
	return a ** b;
};

// const factorial = function(num) { 
//   if (num === 0) return 1;
//   let product = 1;
//   for (let i = num; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// }

const factorial = function(num) {
  if (num === 0) {
    return 1
  }
  return num * factorial (num-1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
