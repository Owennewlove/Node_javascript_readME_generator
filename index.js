// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "What would you like the title of the readME to be?"
    },

    {
        type: "input",
        name: "description",
        message: "What is your project description"

    },

    {
        type: "input",
        name: "installation",
        message: "How do you install your project"

    },

    {
        type: "list",
        name: "license",
        message: "Choose a license from the following list",
        choices: ["Apache", "Boost","Eclipse", "IBM", "ISC", "MIT"]

    },








];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
