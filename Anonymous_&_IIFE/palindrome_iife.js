//Return all the palindromes in an array

let strings = ["madam", "hello", "racecar", "world", "level"];
let palindromes = (function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
})(strings);
console.log(palindromes); // Output: ["madam", "racecar", "level"]
