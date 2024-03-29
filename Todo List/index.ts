#! /usr/bin/env node

import inquirer from "inquirer";

interface TodoItem {
    title: string;
    dueDate: string;
    priority: string;
}

let todolist: TodoItem[] = [];

async function addTask() {
    await inquirer.prompt([
        { message: "Please add the task in the list: ", type: "input", name: "task" },
        { message: "Set the due date: ", type: "input", name: "dueDate" },
        { message: "Set the Priority level: ", type: "list", name: "priorityList", choices: ["Low", "Medium", "High", "Urgent"] }
    ]).then((answers) => {
        const { task, dueDate, priorityList } = answers;
        todolist.push({ title: task, dueDate: dueDate , priority: priorityList });
        console.log(`${task} added to your todo-list`);
        Menu()
    });
}

function showTaskList() {
    console.log(todolist);
    Menu()
}


async function removeTask(){
    if  (todolist.length === 0){
        console.log("The todo list is empty");
    } else{
        const choices = todolist.map((task, index) => `${index + 1}. ${task.title}`);

    await inquirer.prompt([
        {
            type: 'list',
            name: 'taskIndex',
            message: 'Select the task to remove:',
            choices: choices
        }
    ]).then((answers) => {
        const index = parseInt(answers.taskIndex) - 1;
        todolist.splice(index, 1);
        console.log("Task removed successfully.");
    });
    }
    Menu();
}


async function Menu() {
  const operationPerform = await inquirer.prompt([
    {
      message: "What would you like to do?",
      type: "list",
      name: "Operations",
      choices: [
        "Add a new task",
        "Remove the task",
        "Check the task list",
        "Quit application",
      ],
    }
  ]);
  if (operationPerform.Operations === "Add a new task") {
        addTask();
  } else if (operationPerform.Operations === "Remove the task") {
        removeTask();
  } else if (operationPerform.Operations === "Check the task list") {
        showTaskList();
  } else {
        console.log("Exiting....");
  }
}

Menu() 