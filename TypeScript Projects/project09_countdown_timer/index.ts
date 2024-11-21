#! /usr/bin/env node

import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const response = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter the amount of seconds:",
    validate: (input: number): string | boolean => {
        if (isNaN(input)) {
            return "Please enter a valid number.";
        } else if (input > 60) {
            return "Seconds must be less than or equal to 60.";
        } else {
            return true;
        }
    }
});



const input = response.userInput;

function startTime(val: number) {
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + val);

    console.log(`Countdown starts from ${val} seconds`);

    const intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds( endTime, currentTime);

        if (timeDiff <= 0) {
            clearInterval(intervalId);
            console.log("Time has expired");
        } else {
            const min = Math.floor(timeDiff / 60);
            const seconds = timeDiff % 60;
            console.log(`${min.toString().padStart( 2,"0")} : ${seconds.toString().padStart(2, "0")}`);
        }
    }, 1000 );
}

startTime(input);