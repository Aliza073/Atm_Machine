#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 1234;
console.log("Welcome to the code with Aliza");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct! Login succesfully");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select any option",
            choices: ["Withdraw amount", "Check balance"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount of withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw succesfully`);
            console.log(`Your remaining balance is : ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "Check balance") {
        console.log(`Your current amount balance is ${myBalance}`);
    }
}
else {
    console.log("Pin is incorrect! Try Again");
}
