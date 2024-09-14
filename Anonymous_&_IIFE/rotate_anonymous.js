//Rotate an array by k times
let rotateArray = function(arr, k) {
    k = k % arr.length; // Handle cases where k is larger than the array length
    let rotated = arr.slice(-k).concat(arr.slice(0, -k));
    return rotated;
};

let numbers = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let result = rotateArray(numbers, k);
console.log(result); // Output: [5, 6, 7, 1, 2, 3, 4]
