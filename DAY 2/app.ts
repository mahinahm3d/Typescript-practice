// Anonymous function: A function that does not have a name.
let anonymous = function () {
    console.log("This is an anonymous function.\n");
};
anonymous();

let anonyFunc = function (a: string) {
    return a;
}
let final = anonyFunc("completed.\n");
console.log(final);

// Another example of an anonymous function with TypeScript
const greet = function (name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Anastasia")); // Output: Hello Emily

// Immediately invoked function expression (IIFE): A function that is defined and immediately executed, typically used to create a new scope and avoid global variable conflicts.
(function() {
    // Code that runs immediately
    console.log("This is life!");
})();

(function (message: string) {
    console.log(message);
})("Hello, World!\n");

(function(name: string): void {
    console.log(`Hello, ${name}`);
})("Nikita.");

// Recursive function: A function that calls itself in order to solve a problem by breaking it down into smaller, more manageable sub-problems, eventually reaching a base case that stops the recursion.
function sum(n: number): number {
    if (n <= 1) { // Base case
        return n;
    } else { // Recursive case
        return n + sum(n - 1);
    }
}

console.log(sum(5)); // Output: 15

// Recursive function: Calculates the factorial of a number.
function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Output: 120
