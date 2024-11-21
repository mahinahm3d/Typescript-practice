#! /usr/bin/env node

// import the inquirer
import inquirer from "inquirer"

//Declare a constant 'answer' and assign it to the result of inquirer.prompt function.

const answer:{
    sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the word: "
    }
])

const words = answer.sentence.trim().split(" ")

//print the array of words to the console
console.log(words)

// Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);