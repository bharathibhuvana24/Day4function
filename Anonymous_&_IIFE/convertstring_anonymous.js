//convert all string to title caps in string array 

//anonymous function
let strings = ["hello world", "javascript is fun", "coding is great"];
let titleCaps = strings.map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});
console.log(titleCaps); // Output: ["Hello World", "Javascript Is Fun", "Coding Is Great"]
