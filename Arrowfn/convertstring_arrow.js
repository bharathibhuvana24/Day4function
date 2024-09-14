//convert all string to title caps in string array with arrow function

let strings = ["hello world", "javascript is fun", "coding is great"];
let titleCaps = strings.map(str => 
    str.toLowerCase().split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
);
console.log(titleCaps); // Output: ["Hello World", "Javascript Is Fun", "Coding Is Great"]
