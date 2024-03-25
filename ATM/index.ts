import inquirer from "inquirer";

let userBalance: number = 0;

function checkBalance(balance: number) {
  if (balance > 0) {
    console.log(`Your balance is $${balance}`);
  } else {
    console.log("You don't have any money in your account.");
  }
}

function withdraw(balance: number) {
  if (balance >= 100) {
    inquirer
      .prompt([
        {
          message: "Enter the amount you want to withdraw:",
          type: "number",
          name: "withdrawAmount",
        },
      ])
      .then((withdrawInput) => {
        const amountWithdraw: number = withdrawInput.withdrawAmount;
        if (
          amountWithdraw > 100 &&
          amountWithdraw <= balance &&
          amountWithdraw < 20000
        ) {
          const transactionTax: number = 15;
          balance -= amountWithdraw + transactionTax;
          console.log(`Your new balance is $${balance}\n`);
        } else if (amountWithdraw > balance) {
          console.log("You don't have enough money\n");
        } else if (amountWithdraw > 20000) {
          console.log("The transaction cannot be done for greater than twenty thousand only\n");
        } else {
          console.log("You can't withdraw money greater than twenty thousand dollars.\n");
        }
        atm(); // Prompt the user again
      });
  } else {
    console.log("Your Balance is less than 100 dollars\n");
    atm(); // Prompt the user again
  }
}

function deposit(balance: number) {
  inquirer
    .prompt([
      {
        message: "Please enter the deposit amount:",
        type: "number",
        name: "amountDeposit",
      },
    ])
    .then((depositInput) => {
      const amountDeposit: number = depositInput.amountDeposit;
      balance += amountDeposit;
      console.log(`Your new balance is $${balance}\n`);
      atm(); // Prompt the user again
    });
}

function atm() {
  console.log("Welcome to the ATM");

  inquirer
    .prompt([
      { message: "Enter your username: ", type: "input", name: "userName" },
      { message: "Enter your pin number: ", type: "number", name: "userPin" },
    ])
    .then((userInput) => {
      if (userInput.userName === "admin" && userInput.userPin === 12345) {
        showMenu();
      } else {
        console.log("Please enter valid username and pin\n");
        atm(); // Prompt the user again
      }
    });
}

function showMenu() {
  console.log("\n1. Check Balance");
  console.log("2. Withdrawal");
  console.log("3. Deposit");
  console.log("4. Exit\n");

  inquirer
    .prompt([
      { message: "Enter your option (1/2/3/4): ", type: "list", name: "userChoice", choices: ["Check Balance", "Withdrawal", "Deposit", "Exit"]},
    ])
    .then((choiceInput) => {
      const userChoice: string = choiceInput.userChoice;
      if (userChoice === "Check Balance") {
        checkBalance(userBalance);
        showMenu();
      } else if (userChoice === "Withdrawal") {
        withdraw(userBalance);
      } else if (userChoice === "Deposit") {
        deposit(userBalance);
      } else if (userChoice === "Exit") {
        console.log("Exiting menu...\n");
        process.exit();
      } else {
        console.log("Invalid Option! Please Enter Again\n");
        showMenu(); 
      }
    });
}

atm();
