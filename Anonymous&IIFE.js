
//print odd numbers in an array

//anonymous function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]


//IIFE
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = (function(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0;
    });
})(numbers);
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]


//convert all string to title caps in string array 

//anonymous function
let strings = ["hello world", "javascript is fun", "coding is great"];
let titleCaps = strings.map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});
console.log(titleCaps); // Output: ["Hello World", "Javascript Is Fun", "Coding Is Great"]

//IIFE
let strings = ["hello world", "javascript is fun", "coding is great"];
let titleCaps = (function(arr) {
    return arr.map(function(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
})(strings);
console.log(titleCaps); // Output: ["Hello World", "Javascript Is Fun", "Coding Is Great"]


//sum of all numbers in an array

//anonymous function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 55

//IIFE
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = (function(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
})(numbers);
console.log(sum); // Output: 55

//Return all the prime numbers in an array

//anonymous function
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let primeNumbers = numbers.filter(function(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});
console.log(primeNumbers); // Output: [2, 3, 5, 7, 11]


//IIFE
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let primeNumbers = (function(arr) {
    return arr.filter(function(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(numbers);
console.log(primeNumbers); // Output: [2, 3, 5, 7, 11]

//Return all the palindromes in an array

//anonymous function
let strings = ["madam", "hello", "racecar", "world", "level"];
let palindromes = strings.filter(function(str) {
    return str === str.split('').reverse().join('');
});
console.log(palindromes); // Output: ["madam", "racecar", "level"]

//iife
let strings = ["madam", "hello", "racecar", "world", "level"];
let palindromes = (function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
})(strings);
console.log(palindromes); // Output: ["madam", "racecar", "level"]

//Return median of two sorted arrays of the same size

//anonymous function
let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];
let findMedian = function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid1 = merged.length / 2;
    let mid2 = mid1 - 1;
    return (merged[mid1] + merged[mid2]) / 2;
};
console.log(findMedian(arr1, arr2)); // Output: 16


//IIFE
let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];
let median = (function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid1 = merged.length / 2;
    let mid2 = mid1 - 1;
    return (merged[mid1] + merged[mid2]) / 2;
})(arr1, arr2);
console.log(median); // Output: 16

//Remove duplicates form an array

//anonymous function

let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

//IIFE
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]


//Rotate an array by k times

//anonymous function

let rotateArray = function(arr, k) {
    k = k % arr.length; // Handle cases where k is larger than the array length
    let rotated = arr.slice(-k).concat(arr.slice(0, -k));
    return rotated;
};

let numbers = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let result = rotateArray(numbers, k);
console.log(result); // Output: [5, 6, 7, 1, 2, 3, 4]

//IIFE
let numbers = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotatedArray = (function(arr, k) {
    k = k % arr.length; // Handle cases where k is larger than the array length
    return arr.slice(-k).concat(arr.slice(0, -k));
})(numbers, k);
console.log(rotatedArray); // Output: [5, 6, 7, 1, 2, 3, 4]

