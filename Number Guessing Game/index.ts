#! /usr/bin/env node 

import inquirer from "inquirer";

async function numberGuessingGame(){
    const computerNumber : number = Math.floor(Math.random() * 10 + 1);

    const answer = await inquirer.prompt([
        {message: "Enter the Number (1-10):", type: "number", name: "guessNumber"}
    ])
    
    
    if(answer.guessNumber === computerNumber){
        console.log("Your guessed number is correct")
    }else {
        console.log("You are wrong")
    } 
}

numberGuessingGame()