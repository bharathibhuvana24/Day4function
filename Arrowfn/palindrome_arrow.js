let strings = ["madam", "hello", "racecar", "world", "level"];
let palindromes = strings.filter(str => str === str.split('').reverse().join(''));
console.log(palindromes); // Output: ["madam", "racecar", "level"]
