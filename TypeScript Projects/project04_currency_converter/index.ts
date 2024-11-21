#!/usr/bin/env node
import inquirer from "inquirer";

// Initialize an empty array to store todo items
let todoList: string[] = [];

// Welcome message
console.log("\n \t Welcome To Muneeba Arshad Todo-List Application \n");

// Function to create and manage todo list
async function createTodo(todoList: string[]) {
    let exitLoop = false;

    // Main loop to display options and handle user input
    do {
        // Prompt user to choose an operation
        let operations = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "Select an option you want to do.",
            choices: ["add task", "update task", "view task", "delete task", "exit"]
        }]);

        // Switch case to perform operations based on user input
        switch (operations.operation) {
            case "add task":
                // Prompt user to enter a new task
                let addTask = await inquirer.prompt([{
                    name: "add",
                    type: "input",
                    message: "Enter your task"
                }]);
                // Add the new task to the todoList array
                todoList.push(addTask.add);
                console.log(todoList);
                break;

            case "update task":
                // Prompt user to choose a task to update
                let updateTask = await inquirer.prompt([{
                    name: "update",
                    type: "list",
                    message: "Select item to update",
                    choices: todoList
                }]);
                // Prompt user to enter the updated task
                let updateTaskInput = await inquirer.prompt([{
                    name: "updates",
                    type: "input",
                    message: "Enter updated task"
                }]);
                // Update the selected task in the todoList array
                let updatedTodoList = todoList.map(task => (task === updateTask.update) ? updateTaskInput.updates : task);
                todoList = updatedTodoList;
                console.log(todoList);
                break;

            case "view task":
                // Display all tasks in the todoList array
                console.log(todoList);
                break;

            case "delete task":
                // Prompt user to choose a task to delete
                let deleteTask = await inquirer.prompt([{
                    name: "delete",
                    type: "list",
                    message: "Select item to delete",
                    choices: todoList
                }]);
                // Remove the selected task from the todoList array
                todoList = todoList.filter(task => task !== deleteTask.delete);
                console.log(todoList);
                break;

            case "exit":
                // Set exitLoop flag to true to exit the loop
                exitLoop = true;
                console.log("Exiting Todo List Application");
                break;
        }
    } while (!exitLoop); // Continue looping until exitLoop is true
}

// Call the createTodo function with the initial todoList
createTodo(todoList);


 