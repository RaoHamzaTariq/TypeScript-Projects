#! /usr/bin/env node
import inquirer from "inquirer";
let wordAndCharacterCounter = async () => {
    let answer = await inquirer.prompt([
        { message: "Enter your sentence:", type: "input", name: "inputSentence" }
    ]);
    const wordsArray = answer.inputSentence.trim().split(/\s+/);
    const numWords = wordsArray.length;
    const numChars = wordsArray.reduce((acc, word) => acc + word.length, 0);
    return { words: numWords, characters: numChars };
};
wordAndCharacterCounter().then(({ words, characters }) => {
    console.log(`Total Words: ${words}`);
    console.log(`Total Characters (excluding spaces): ${characters}`);
});
