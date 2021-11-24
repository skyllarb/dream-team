// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Enter your Github username');
              return false;
            }
          }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Enter your email address');
              return false;
            }
          }
    },

    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Enter the title of your project');
              return false;
            }
        }    
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Enter a description of your project');
              return false;
            }
        }  
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What is required so a user can to install your project?',
        validate: intallationInput => {
            if (intallationInput) {
              return true;
            } else {
              console.log('You need to provide installation steps');
              return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('You must provide instructions');
              return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How can other developers contribute to your project?',
        validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('Provide guidelines');
              return false;
            }
        }
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests for your project.',
        validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('Please provide examples for how to run tests for your project!');
              return false;
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Select a license relevant to this project',
        choices: [
            'No license',
            'MIT', 
            'Mozilla Public',
            'Apache License',
            'Boost Software License',
          ]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('Success!');
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data))
    }) 
}

// Function call to initialize app
init();
