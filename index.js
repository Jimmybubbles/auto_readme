const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown');

// create array of questions




const questions = ([

    {
     // Section user to input a project title

        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        // validation 
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please enter a name for the project')
            }
        }
    },
   
    // Section user to input a project description

    {
        type: 'input',
        message: 'write a description about the project',
        name: 'description',

        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
                console.log('Please enter a project description')
            }
        }

    },
    // Section user to input a project installation information


    {
        type: 'Input',
        message: 'input the project installation information',
        name: 'installation',

        validate: installationInput => {
            if (installationInput) {
                return true
            } else {
                console.log('please enter a project installation information')
            }
        }

    },

    // Section user to input to explain how to use the project

    {
        type: 'Input',
        message: 'explain how to use the project',
        name: 'useProject',

        validate: useProjectInput => {
            if (useProjectInput) {
                return true
            } else {
                console.log('please enter how to use the project')
            }
        }
    },
    
    // section user to choose licenses




    // section for people to contribute to the project

    {
        type: 'Input',
        message: 'input section for how people can contribute to the project',
        name: 'contribute',

        validate: contributeInput => {
            if (contributeInput) {
                return true
            } else {
                console.log('please enter how people can contribute to the project')
            }
        }
    },



    // section for how coders can test this project

    {
        type: 'Input',
        message: 'input section for how people can test to the project',
        name: 'test',

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
        name: 'github',

        validate: githubInput => {
            if (githubInput) {
                return true
            } else {
                console.log('please enter github user name')
            }
        }
    },


    // section for how to contribute to this project


])


