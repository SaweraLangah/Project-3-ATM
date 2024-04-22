#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; //Dollar
console.log(`My total balance is : ${myBalance}`);
let myPin = 3366;
console.log(`My pin code is : ${myPin}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "fastcash", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient amount1!");
        }
        // -, -=, += : ASSIGNMENT OPERATORS;
        else {
            let amountLeft = myBalance - amountAns.amount;
            console.log(`The remaining balance is : ${amountLeft}`);
            console.log("Thank you");
        }
    }
    else if (operationAns.operation === "fastcash") {
        let fastcashamountAns = await inquirer.prompt([
            {
                name: "fastcashAmount",
                type: "list",
                message: "Select one option",
                choices: ["500", "10000", "15000", "20000"],
            }
        ]);
        if (myBalance - fastcashamountAns.fastcashAmount) {
            let leftAmount = myBalance - fastcashamountAns.fastcashAmount;
            console.log(`The remaining balance is ${leftAmount}`);
        }
        else {
            fastcashamountAns.fastcashAmount > myBalance;
            console.log("insufficient amount");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is:" + myBalance);
    }
    ;
}
else {
    console.log("Incorrect pin code!");
}
;
