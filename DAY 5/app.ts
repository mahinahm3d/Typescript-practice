//1. Difference between Unknown and never 


// Unknown (unknown): A type-safe counterpart of any, used when you don't know the exact type of
// a value at compile-time but need type-checking.

let b: unknown;
let c: string;
let d: number = 9;
console.log((b as string).split(","));  // string method is used here

if (b === "string") {
    c = b;  // After type checking string can be equal to unknown
}
if (b === "number") {
    b = d;  // After type checking number can be equal to unknown
}

// Never (never): Represents types of values that never occur, used for functions that never
// return or variables that cannot have a value and never usually throw an error.

function error(message: string): never {
    throw new Error(message);
}

error("it will throw an error");

function infinityLoop(): never {
    while (true) {
        console.log("Infinity Loop");
        // this loop will never end
    }
}


//2. Mutable & immutable 


//Mutable objects or variables can be changed after they are created.
//Examples include arrays and objects that can be modified using methods like push, pop, or direct property assignment.

let mutableArray: number[] = [1, 2, 3];
mutableArray[0] = 0; // This is allowed
console.log(mutableArray); // Output: [0, 2, 3]

let arr = [1, 2, 3];
arr.push(4);  // Array is mutable
console.log(arr);  // Output: [1, 2, 3, 4]

let obj = { name: "Alice" };
obj.name = "Bob";  // Object is mutable
console.log(obj);  // Output: { name: "Bob" }

//immutable 


//Immutable objects or variables cannot be changed once they are created.
//Strings in JavaScript are immutable by default. Functional programming often uses immutable data structures.

const immutableArray: ReadonlyArray<number> = [1, 2, 3];
// immutableArray[0] = 0; // Error: Index signature in type 'readonly number[]' only permits reading
console.log(immutableArray); // Output: [1, 2, 3]

const str = "hello";
const newStr = str.toUpperCase();  // Strings are immutable
console.log(newStr);  // Output: "HELLO"
console.log(str);  // Output: "hello" (original string remains unchanged)

// Using immutable data structures (e.g., Immutable.js library)
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2 });
const map2 = map1.set('b', 3);  // creates a new Map
console.log(map1.get('b'));  // Output: 2
console.log(map2.get('b'));  // Output: 3


//3. Difference Between Type and Interfaces


//Type
//type is used to define type aliases, union types, and intersection types.
//It can represent primitive types, object types, and even other types like union and intersection.

type StringOrNumber = string | number;
type Person = {
    name: string;
    age: number;
};
type ReadOnlyPerson = {
    readonly name: string;
    readonly age: number;
};


//Interface

//interface is used to define a contract for classes or objects. It can be extended by other interfaces or implemented by classes.
//It's more flexible for object type definitions, particularly when dealing with inheritance and merging.

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

class Developer implements Employee {
    name: string;
    age: number;
    employeeId: number;
    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
}

//Use Cases: Use type for complex type expressions, unions, and intersections. Use interface for defining the structure of objects and classes, especially when inheritance is involved.
//Extensibility: Interfaces can be extended or merged, whereas types cannot be reopened to add new properties.

// Extending an interface
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// Extending a type (requires intersection)
type Animal = {
    name: string;
};

type Dog = Animal & {
    breed: string;
};
