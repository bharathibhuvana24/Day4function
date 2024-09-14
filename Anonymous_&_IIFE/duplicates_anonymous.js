//Remove duplicates form an array



let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

