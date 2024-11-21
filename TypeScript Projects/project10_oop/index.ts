#! /usr/bin/env node 

// Import the inquirer module for creating interactive command-line interfaces
import inquirer from 'inquirer';

// Define a Student class to model a student with a name property
class Student {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

// Define a Person class to manage a list of students
class Person {
    students: Student[] = [];
    
    // Method to add a new student to the students array
    addStudent(student: Student) {
        this.students.push(student);
    }
}

// Create an instance of the Person class to hold students
const persons = new Person();
console.log(persons);

// Define an async function to start the program and handle user interactions
const programStart = async (persons: Person) => {
    // Infinite loop to continuously prompt the user until they choose to exit
    while (true) {
        console.log("Welcome!");
        
        // Display the main menu and ask the user whom they would like to interact with
        const mainMenu = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });

        // Handle user's selection from the main menu
        if (mainMenu.select === "staff") {
            console.log("You approach the staff room. Please feel free to ask any questions.");
        } else if (mainMenu.select === "student") {
            // Prompt the user to enter the name of the student they wish to engage with
            const studentAnswer = await inquirer.prompt({
                name: "studentName",
                type: "input",
                message: "Enter the student's name you wish to engage with"
            });

            // Check if the student already exists in the list
            const existingStudent = persons.students.find(student => student.name === studentAnswer.studentName);

            // If the student does not exist, create a new student and add to the list
            if (!existingStudent) {
                const newStudent = new Student(studentAnswer.studentName);
                persons.addStudent(newStudent);
                console.log(`Hello, I am ${newStudent.name}. Nice to meet you!`);
                console.log("Student added.");
            } else {
                // If the student exists, greet the user
                console.log(`Hello, I am ${existingStudent.name}. Nice to see you again!`);
            }
            
            // Display the current list of student names
            console.log("Current student list:");
            console.log(persons.students.map(student => student.name).join(", "));
        } else if (mainMenu.select === "exit") {
            // If the user chooses to exit, break the loop and end the program
            console.log("Exiting the program...");
            break;
        }
    }
};

// Start the program by calling the programStart function with the persons instance
programStart(persons);