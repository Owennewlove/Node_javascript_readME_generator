
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs');



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
        choices: ["Apache", "Boost","Eclipse", "IBM", "ISC", "MIT", "N/A"]

    },








];



// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(data=>{
        console.log(data)
       fs.writeFileSync("./output/README.md", generateMarkdown(data) )
    })


}

// Function call to initialize app
init();
