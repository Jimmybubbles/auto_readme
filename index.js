const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkup');


// create array of questions

const questions = ([

    {
        // Section user to input a project title

        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
        // validation 
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please enter a name for the project')
                return false
            }
        }
    },

    // Section user to input a project description

    {
        type: 'input',
        message: 'write a description about the project',
        name: 'Description',

        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
                console.log('Please enter a project description')
                return false
            }
        }

    },
    // Section user to input a project installation information


    {
        type: 'Input',
        message: 'input the project installation information',
        name: 'Installation',

        validate: installationInput => {
            if (installationInput) {
                return true
            } else {
                console.log('please enter a project installation information')
                return false
            }
        }

    },

    // Section user to input to explain how to use the project

    {
        type: 'Input',
        message: 'explain how to use the project',
        name: 'UseProject',

        validate: useProjectInput => {
            if (useProjectInput) {
                return true
            } else {
                console.log('please enter how to use the project')
                return false
            }
        }
    },

    // section user to choose licenses
    {
        type: 'rawlist',
        message: 'input the licenses to use in the project',
        name: 'Licenses',
        choices: ['MIT', 'CC', 'Apache', 'NONE'],

        validate: licensesInput => {
            if (licensesInput) {
                return true
            } else {
                console.log('please choose a license')
                return false
            }
        }
    },



    // section for people to contribute to the project

    {
        type: 'Input',
        message: 'input section for how people can contribute to the project',
        name: 'Contribute',

        validate: contributeInput => {
            if (contributeInput) {
                return true
            } else {
                console.log('please enter how people can contribute to the project')
                return false
            }
        }
    },



    // section for how coders can test this project

    {
        type: 'Input',
        message: 'input section for how people can test the project',
        name: 'Test',

        validate: testInput => {
            if (testInput) {
                return true
            } else {
                console.log('please enter how people can test the project')
            }
        }
    },


    // section for github user name

    {
        type: 'Input',
        message: 'input github user name',
        name: 'Github',

        validate: githubInput => {
            if (githubInput) {
                return true
            } else {
                console.log('please enter github user name')
            }
        }
    },

    {
        type: 'Email',
        message: 'Enter your email',
        name: 'Email',

        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('please enter your email')
            }
        }
    },


]);

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    generateMarkdown(answers)
});


// write to a markdown file
function writeToFile(fileName, data) {

}

function init() {

}

init()


