//Return all the palindromes in an array

let strings = ["madam", "hello", "racecar", "world", "level"];
let palindromes = strings.filter(function(str) {
    return str === str.split('').reverse().join('');
});
console.log(palindromes); // Output: ["madam", "racecar", "level"]
