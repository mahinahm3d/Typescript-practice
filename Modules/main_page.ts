import { myFunc1, myFunc2 } from "./second.js";
import result from "./first.js";

// Call functions imported from second.js
myFunc1();
myFunc2();

// Log the result imported from first.js
console.log(result);