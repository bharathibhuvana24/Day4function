//Rotate an array by k times
let numbers = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotatedArray = (function(arr, k) {
    k = k % arr.length; // Handle cases where k is larger than the array length
    return arr.slice(-k).concat(arr.slice(0, -k));
})(numbers, k);
console.log(rotatedArray); // Output: [5, 6, 7, 1, 2, 3, 4]
