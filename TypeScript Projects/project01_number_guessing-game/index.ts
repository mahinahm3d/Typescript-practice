#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber: number = Math.floor(Math.random()*10) ;

type numType ={
         "userGuess" :number
}

const answers:numType = await inquirer.prompt([{
    type:"number",
    name:"userGuess",
    message:"Guess a number between 1 to 10 and write it"
}]);

const{userGuess} = answers;
console.log(`GUessed no: ${userGuess}, Correct answer is: ${randomNumber}`)
if (userGuess === randomNumber) {
    console.log("Correct Answer! Congratulation you are win!")
} else {
    console.log("Wrong Answer! better luck next time!")
}

 