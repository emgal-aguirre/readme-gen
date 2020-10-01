const inquirer = require("inquirer");
const fs = require("fs");
const { clear } = require("console");
const { title } = require("process");


// array of questions for user
inquirer
    .prompt([
        {
            message: "Hey! Let's get started. What is the title of your project?",
            name: "title",
        },
        {
            message: "Enter a project discription",
            name: "discription",
        },
        {
            message: "What technologies did you use for this project?",
            name: "technologies",
        },
        {
            message: "What are the installation instructions?",
            name: "installationInstructions",
        },
        {
            message: "What is the usage infromation?",
            name: "usage",
        },
        {
            type: "list",
            message: "What license would you like to use?",
            name: "licenseList",
            choices: ['GNU GPLv3', 'MIT', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'Apache License 2.0', 'The Unlicense'],
        },
        {
            message: "Include your name and year for the licenses (YYYY First Last)",
            name: "licenseInfo",
        },
        {
            message: "What are the contribution guidelines?",
            name: "contribution",
        },
        {
            message: "What are the test instructions?",
            name: "test",
        },
        {
            message: "What is your Github Username?",
            name: "github",
        },
        {
            message: "what is your email?",
            name: "email",
        },
        {
            message: "Last Question! How would you like  to be contacted?",
            name: "contact",
        },
    ]);
