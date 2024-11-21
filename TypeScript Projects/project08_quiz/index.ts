#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk"



let apiLink: string = "https://opentdb.com/api.php?amount=6&category=19&difficulty=easy&type=multiple"

let fetchData = async (data: string) => {
  let fetchQuize: any = await fetch(data);
  let res = await fetchQuize.json();
  return res.results
}

let data = await fetchData(apiLink);

let startQuize = async () => {
  let score: number = 0;
  //for user name
  let name = await inquirer.prompt({
    name: "fname",
    type: "input",
    message: "What is your name ?"
  });

  for (let i = 1; i <= 5; i++) {
    let answer = [...data[i].incorrect_answers, data[i].correct_answer];

    let ans = await inquirer.prompt({
      name: "quiz",
      type: "list",
      message: data[i].question,
      choices: answer.map((val: any) => val),
    });

    if (ans.quiz == data[i].correct_answer) {
      ++score
      console.log(chalk.bold.italic.blue("Correct"))
    } else {
      console.log(`Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`)
    }

  }
  console.log(`Dear ${chalk.green.bold(name.fname)}, your score is ${chalk.red.bold(score)}  out of ${chalk.red.bold("5")}`);

};

startQuize();
