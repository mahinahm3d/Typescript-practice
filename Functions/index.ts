//                         Functions 

//............ Basic topics Function.........
// 1) What is function?
// 2) Function with parameters and arguments
// 3) Function return keturn keyword
// 4) Function return type

//................Advance Topic Function
// 5)D/W console log and return keyword in function
// 6)Function default parameter 
// 7)Function rest parameter& spread operator
// 8)Function optional parameterwith condition
// 9)type of function

//.............function type..........

//THERE ARE THREE TYPE OF OF FUNCTION .
// 1)REGULAR FUNCTION OR NAME FUNCTION
// 2)ARROW FUNCTION
// 3) ANNONYMOUS Function

// 10)IMEDIATELY INVOCKED FUNCTION
// RECURSIVE FUNCTION 

//....................basic function...............................

function myFunc() {
    console.log("hello i am function");

}
myFunc()

//...............2) Function with parameters and arguments................

//                    parameter
function name(myName: string, lname: string) {
    console.log(myName, lname);

}
name("Muneeba", "Arshad")
//       argument

//...................... 

function sum1(accounting: number, states: number) {
    console.log(accounting + states);

}
sum1(100, 50)

//.....................

function sum2(accounting: number, states: number) {
    let result = accounting + states
    console.log(result);

}
sum2(100, 50)

//...................3) Function return keturn keyword..............                                                           ..............

function myFunction(accounting: number, math: number) {
    let result = accounting + math
    return result

}
console.log(myFunction(50, 50));

//.......................4) Function return type..................

function myFunction1(accounting: number, math: number): number {
    return accounting + math

}

let res = myFunction1(50, 50)
console.log(res);


//................Advance Topic Function

// 5)D/W console log and return keyword in function

// When ever we use console.log inside a function . its return type will be void.

// Whenever we use 'return', the return type can be either a number or a string. It depends on what type you pass as a parameter. If you pass a number, the return type will be a number. If you pass a string, the return type will be a string.

// explicity:
// When we specify the type ourselves, it is called explicit typing.

// implicity:
//When TypeScript infers the type on its own, it is called implicit typing.      

//...........................................

//..................... 6)Function default parameter........................


function defult_para(accounting: number, math: number, eng: number = 15): number {
    return accounting + math + eng

}

console.log(defult_para(50, 50, 10));

//..........................


function defultPara(Student: string, lastName: string, school: string = "GIAIC student."): string {
    return Student + lastName + school

}

console.log(defultPara("Muneeba ", "Arshad ", "PIAIC"));
console.log(defultPara("Aira ", "sameer "));

 
// ................7)Function rest parameter& spread operator......................

function box(name: string, ...eidi: number[]) {
    return name + eidi
}

console.log(box("Muneeba", 10, 20, 30, 40, 50));

//.......................... 

function box1(name: string, ...eidi: number[]) {
    console.log(...eidi);

    return name + eidi
}

console.log(box1("Muneeba", 10, 20, 30, 40, 50));

//..........................

//.................... 8)Function optional parameterwith condition........................

function my_name(fName: string, lName?: string) {
    return fName + lName
}

console.log(my_name("Muneeba "));
console.log(my_name("Muneeba ", "Arshad"));


//.........................

function myname(fName: string, lName?: string) {
    if (lName) {
        return fName + lName
    }
    return fName
}
console.log(myname("Muneeba "));
console.log(myname("Muneeba ", "Arshad"));

///.................... 9)type of function......................

// 2)ARROW FUNCTION

let Arrowfunc = (myage: number) => myage
console.log(Arrowfunc(20));

//...................

let Arrowfunction = (myage: number) => {
    return myage
}
console.log(Arrowfunction(20));

//................... 3) ANNONYMOUS Function...................
//syntax:    function(){}


let ANNONYMOUS_func = function (x: string) {
    return x
}
console.log(ANNONYMOUS_func("i am ANNONYMOUS_function"));

//...................10)IMEDIATELY INVOCKED FUNCTION.................

(function (a: string) {
    console.log(a);

})("IMEDIATELY INVOCKED FUNCTION")

//...................... RECURSIVE FUNCTION .............................

function minefunc(x: number) {
    if (x <= 0) {
        console.log("done");
        return

    }
    console.log(x);
    
    minefunc(x - 1)
}
minefunc(10)                                                        