//sum of all numbers in an array with arrow function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 55