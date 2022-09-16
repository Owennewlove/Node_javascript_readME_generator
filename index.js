
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
        type: "input",
        name: "usage",
        message: "What are the steps to using your application?"
        
    },

    {
        type: "input",
        name: "credits",
        message: "Were there any websites that were referenced when creating this application"

    },

    {
        type: "input",
        name: "contributing",
        message: "Are there any opportunities for others to contribute to this application?"

    },

    {
        type: "input",
        name: "test",
        message: "What are the test insructions?"

    },


    {
        type: "list",
        name: "license",
        message: "Choose a license from the following list",
        choices: ["Apache", "Boost","Eclipse", "IBM", "ISC", "MIT", "N/A"]

    },

    {
        type: "input",
        name: "email",
        message: "What is your email"
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    }



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
