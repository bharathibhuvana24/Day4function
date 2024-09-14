
//print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

//convert all string to title caps in string array with arrow function

let strings = ["hello world", "javascript is fun", "coding is great"];
let titleCaps = strings.map(str => 
    str.toLowerCase().split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
);
console.log(titleCaps); // Output: ["Hello World", "Javascript Is Fun", "Coding Is Great"]

//sum of all numbers in an array with arrow function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 55

//Return all the prime numbers in an array with arrow function

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let primeNumbers = numbers.filter(num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});
console.log(primeNumbers); // Output: [2, 3, 5, 7, 11]

//Return all the palindromes in an array
let strings = ["madam", "hello", "racecar", "world", "level"];
let palindromes = strings.filter(str => str === str.split('').reverse().join(''));
console.log(palindromes); // Output: ["madam", "racecar", "level"]


