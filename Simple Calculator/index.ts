#! /usr/bin/env node

import inquirer from "inquirer";

type DataType = {
    operator: string;
    firstNumber: number;
    secondNumber: number;
}

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Enter the operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  }
]);

function SimpleCalculator(answer: DataType) {
    let { firstNumber, secondNumber, operator } = answer;

    if (operator == "Addition") {
        console.log(`The answer is ${firstNumber + secondNumber}`);
    } else if (operator == "Subtraction") {
        console.log(`The answer is ${firstNumber - secondNumber}`);
    } else if (operator == "Multiplication") {
        console.log(`The answer is ${firstNumber * secondNumber}`);
    } else if (operator == "Division") {
        console.log(`The answer is ${firstNumber / secondNumber}`);
    } else {
        console.log("Please select a valid operator");
    }
}

SimpleCalculator(answer);
