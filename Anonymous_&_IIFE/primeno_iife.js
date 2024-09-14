//Return all the prime numbers in an array
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
