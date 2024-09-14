//Return median of two sorted arrays of the same size
let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];
let median = (function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid1 = merged.length / 2;
    let mid2 = mid1 - 1;
    return (merged[mid1] + merged[mid2]) / 2;
})(arr1, arr2);
console.log(median); // Output: 16
