//1. Difference between Unknown and never 
// Unknown (unknown): A type-safe counterpart of any, used when you don't know the exact type of
// a value at compile-time but need type-checking.
var b;
var c;
var d = 9;
console.log(b.split(",")); // string method is used here
if (b === "string") {
    c = b; // After type checking string can be equal to unknown
}
if (b === "number") {
    b = d; // After type checking number can be equal to unknown
}
// Never (never): Represents types of values that never occur, used for functions that never
// return or variables that cannot have a value and never usually throw an error.
function error(message) {
    throw new Error(message);
}
error("it will throw an error");
function infinityLoop() {
    while (true) {
        console.log("Infinity Loop");
        // this loop will never end
    }
}
//2. Mutable & immutable 
//Mutable objects or variables can be changed after they are created.
//Examples include arrays and objects that can be modified using methods like push, pop, or direct property assignment.
var mutableArray = [1, 2, 3];
mutableArray[0] = 0; // This is allowed
console.log(mutableArray); // Output: [0, 2, 3]
var arr = [1, 2, 3];
arr.push(4); // Array is mutable
console.log(arr); // Output: [1, 2, 3, 4]
var obj = { name: "Alice" };
obj.name = "Bob"; // Object is mutable
console.log(obj); // Output: { name: "Bob" }
//immutable 
//Immutable objects or variables cannot be changed once they are created.
//Strings in JavaScript are immutable by default. Functional programming often uses immutable data structures.
var immutableArray = [1, 2, 3];
// immutableArray[0] = 0; // Error: Index signature in type 'readonly number[]' only permits reading
console.log(immutableArray); // Output: [1, 2, 3]
var str = "hello";
var newStr = str.toUpperCase(); // Strings are immutable
console.log(newStr); // Output: "HELLO"
console.log(str); // Output: "hello" (original string remains unchanged)
// Using immutable data structures (e.g., Immutable.js library)
var Map = require('immutable').Map;
var map1 = Map({ a: 1, b: 2 });
var map2 = map1.set('b', 3); // creates a new Map
console.log(map1.get('b')); // Output: 2
console.log(map2.get('b')); // Output: 3
var Developer = /** @class */ (function () {
    function Developer(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    return Developer;
}());
