#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 50000;
let myPin = 1234;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAns.pin === myPin) {
    console.log("PIN code is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an operation",
            type: "list",
            choices: ["withdraw cash", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw cash") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Enter amount",
                type: "number",
            },
        ]);
        let myBalance = (balance -= withdrawAns.withdraw); //Balance deduction
        if (myBalance < 0) {
            //Insufficient balance
            console.log("Insufficient balance");
        }
        else {
            console.log("Your remaining balance", myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        // Balance check
        console.log("Your  current balance is ", balance);
    }
    else if (operationAns.operation === "fast cash") {
        let fastAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Choose anyone for fast cash withdraw",
                type: "list",
                choices: [500, 1000, 10000, 20000],
            },
        ]);
        let fastBalance = (balance -= fastAns.fastCash);
        if (fastBalance < 0) {
            console.log("Insufficient Balance");
        }
        else {
            console.log("Your remaining balance is ", fastBalance);
        }
    }
}
else {
    console.log("Incoreect PIN code");
}
