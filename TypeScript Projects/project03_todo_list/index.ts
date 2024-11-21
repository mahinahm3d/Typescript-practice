#!/usr/bin/env node

import inquirer from "inquirer"

let todos = [];
let condition = true;

console.log("\n \t Welcome To Muneeba Arshad Todo-List Application \n")

while(condition){
    let addTask = await inquirer.prompt([
            {
                name:"task",
                type:"input",
                message:"What you want to add in your todo.",
            } 
        ]);
        todos.push(addTask.task);  
        console.log(`${addTask.task} task added in todo-list sucessfully`);

        let addMoreTask = await inquirer.prompt([
        {
                name:"addMore",
                type:"confirm",
                message:"Do you want to add more?",
                default:"false"
        }
    ]);
 
    condition = addMoreTask.addMore    
}
console.log(`Your updated todo-list:  ${todos}`)