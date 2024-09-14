//sum of all numbers in an array
//IIFE
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = (function(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
})(numbers);
console.log(sum); // Output: 55