#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 20000;
let myPin = 2003;

let pinAnswer = await inquirer.prompt(
    [
        {

            name:"pin",
            message:"Enter your pin code",
            type:"number"

        }

    ]
);

 if (pinAnswer.pin === myPin) {
    console.log("Correct pin code")

let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Select your Operation",
                type:"list",
                choices:["withdraw","check balance","fast cash","Exit"]

             }
        ]
    );
console.log(operationAns)

    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter the withdrawl amount",
                    type:"number"



                 }
            ]
    ); if (amountAns.amount > myBalance) {
        console.log("Insufficient balance. Please enter a lower amount.");
    } else {
        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    
    }

 
    if (operationAns.operation === "fast cash"){
        let amountFast = await inquirer.prompt(
            [
                {
                    name:"fastamount",
                    message:"Enter the fast cash amount",
                    type:"list",
                    choices:[1000,2000,500,10000]



                 }
            ]
    );

         myBalance -= amountFast.fastamount;
         console.log(` Your remaining balance is ${myBalance}`)
    }


else if(operationAns.operation === "check balance"){
    console.log(` Your total balance is ${myBalance}`)
}
else if(operationAns.operation === "Exit"){
    console.log(`OK by duaon me yad rakhna Allah Hafiz`)
}
 
 }
 else{
    console.log("incorrect pin number")
 }