#! /usr/bin/env node

//Student Management System

import inquirer from "inquirer";

const randomNum: number = Math.floor(10000 + Math.random() * 90000);
console.log(randomNum);

let myBalance: number = 0;

let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name : ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non_empty value.";
        },
    },
    {
        name: "course",
        type: "list",
        message: "Select the course to enroll.",
        choices: ["JavaScript", "TypeScript", "Python", "PHP", "C++"],
    },
]);

const tuitionFee: { [key: string]: number } = {
    "JavaScript": 2000,
    "TypeScript": 2500,
    "Python": 3000,
    "PHP": 3500,
    "C++": 1900,
};

console.log(`\nTuition Fees: ${tuitionFee[answer.course]}/-\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method.",
        choices: ["Bank", "Easypaisa", "Jazzcash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter payment amount.",
        validate: function (value) {
            if (value.trim() !== "" && !isNaN(parseFloat(value))) {
                return true;
            }
            return "Please enter a valid amount.";
        },
    },
]);

console.log(`\nYou selected payment method ${paymentType.payment}`);

const tuitionFees = tuitionFee[answer.course];
const paymentAmount = parseFloat(paymentType.amount);

if (tuitionFees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.course}.\n`);

    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View status", "Exit"],
        },
    ]);

    if (ans.select === "View status") {
        console.log("\n**********Status**********\n");
        console.log(`Student name: ${answer.students}`);
        console.log(`Student ID: ${randomNum}`);
        console.log(`Course: ${answer.course}`);
        console.log(`Tuition fees paid: ${paymentAmount}`);
        myBalance += paymentAmount;
        console.log(`Balance: ${myBalance}`);
    } else {
        console.log(`\nExiting Student Management System\n`);
    }
} else {
    console.log("Invalid amount for the selected course.\n");
}
