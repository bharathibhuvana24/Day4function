
//print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = (function(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0;
    });
})(numbers);
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]
