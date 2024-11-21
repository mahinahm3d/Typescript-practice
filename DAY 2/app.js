// Anonymous function: A function that does not have a name.
var anonymous = function () {
    console.log("This is an anonymous function.\n");
};
anonymous();
var anonyFunc = function (a) {
    return a;
};
var final = anonyFunc("completed.\n");
console.log(final);
// Another example of an anonymous function with TypeScript
var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(greet("Emily")); // Output: Hello Emily
// Immediately invoked function expression (IIFE): A function that is defined and immediately executed, typically used to create a new scope and avoid global variable conflicts.
(function () {
    // Code that runs immediately
    console.log("This is an IIFE!");
})();
(function (message) {
    console.log(message);
})("Hello, World!\n");
(function (name) {
    console.log("Hello, ".concat(name));
})("Sophia");
// Recursive function: A function that calls itself in order to solve a problem by breaking it down into smaller, more manageable sub-problems, eventually reaching a base case that stops the recursion.
function sum(n) {
    if (n <= 1) { // Base case
        return n;
    }
    else { // Recursive case
        return n + sum(n - 1);
    }
}
console.log(sum(5)); // Output: 15
// Recursive function: Calculates the factorial of a number.
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120
