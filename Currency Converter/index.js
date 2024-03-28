#! /usr/bin/env node 
import inquirer from "inquirer";
const currencies = {
    "USD ($)": 1,
    "EUR (€)": 0.92,
    "AUD ($)": 1.53,
    "GBP (£)": 0.79,
    "INR (₹)": 83.33,
    "PKR (Rs)": 278.75,
    "KWD (د.ك)": 0.31,
};
async function currencyConverter() {
    console.log("Welcome to the Currency Converter!");
    const money = await inquirer.prompt([
        { message: "Enter the amount of money: ", type: "number", name: 'amount' },
        { message: "Enter the currency you want to convert from: ", type: "list", name: 'currencyFrom', choices: Object.keys(currencies) },
        { message: "Enter the currency you want to convert to: ", type: "list", name: 'currencyTo', choices: Object.keys(currencies) },
    ]);
    const exchangeRateFrom = currencies[money.currencyFrom];
    const exchangeRateTo = currencies[money.currencyTo];
    const convertedAmount = Math.round((money.amount * exchangeRateTo) / exchangeRateFrom);
    console.log(`From ${money.currencyFrom} to ${money.currencyTo}, the money is ${money.currencyTo} ${convertedAmount}`);
}
currencyConverter();
