#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

 
// Text-Based Adventure-Game in TypeScript and Node.js

//classes player & opponent
class player {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
};

class opponent {
    name: string
    fuel: number = 100
    static select: string
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

};


//Player name and opponent select
let players = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Please Enter Your Name: "
});

let opponents = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});

// gather data
let p1 = new player(players.name)
let p2 = new opponent(opponents.select)

do {
 //Skeleton
    if (opponents.select == "Skeleton") {

        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run for your life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2)

            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${p2.name} fuel is ${p2.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You loose, better luck next time."))
                    process.exit()
                }
            }

            if (num <= 0) {
                p2.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(`${p2.name} fuel is ${p2.fuel}`))
                if (p2.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"))
                    process.exit()
                }
            }
        }




        if (ask.option == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.green.bold.italic(`Your drink health portion your fuel is ${p1.fuel}`))

        }
        if (ask.option == "Run for your life") {
            console.log(chalk.red.bold.italic("Your loose, better luck next time"))
            process.exit()
        }

    }
//Assassin  
    if (opponents.select == "Assassin") {

        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run for your life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2)

            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${p2.name} fuel is ${p2.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You loose, better luck next time."))
                    process.exit()
                }
            }

            if (num <= 0) {
                p2.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(`${p2.name} fuel is ${p2.fuel}`))
                if (p2.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Win"))
                    process.exit()
                }
            }
        }




        if (ask.option == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.green.bold.italic(`Your drink health portion your fuel is ${p1.fuel}`))

        }
        if (ask.option == "Run for your life") {
            console.log(chalk.red.bold.italic("Your loose, better luck next time"))
            process.exit()
        }

    }
//Zombie  
if (opponents.select == "Zombie") {

    let ask = await inquirer.prompt({
        name: "option",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Attack", "Drink Portion", "Run for your life"]
    });
    if (ask.option == "Attack") {
        let num = Math.floor(Math.random() * 2)

        if (num > 0) {
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${p2.name} fuel is ${p2.fuel}`))
            if (p1.fuel <= 0) {
                console.log(chalk.green.bold.italic("You loose, better luck next time."))
                process.exit()
            }
        }

        if (num <= 0) {
            p2.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${p2.name} fuel is ${p2.fuel}`))
            if (p2.fuel <= 0) {
                console.log(chalk.red.bold.italic("You Win"))
                process.exit()
            }
        }
    }




    if (ask.option == "Drink Portion") {
        p1.fuelIncrease()
        console.log(chalk.green.bold.italic(`Your drink health portion your fuel is ${p1.fuel}`))

    }
    if (ask.option == "Run for your life") {
        console.log(chalk.red.bold.italic("Your loose, better luck next time"))
        process.exit()
    }

}

    
}

while (true)


