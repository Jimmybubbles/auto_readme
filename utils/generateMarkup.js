// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }



const fs = require('fs');
const { type } = require('os');

function generateLicenseBadge() {


    // choices: ['mit', 'cc', 'apache', 'none'],
    let color;
    if (type === 'MIT') color = 'green';
    if (type === 'CC') color = 'blue';
    if (type === 'Apache') color = 'red';
    if (type === 'None') color = 'orange';

    return (
        `

## Licences

   <img scr="https://img.shields.io/badge/license${type}-<${color}">
    
   `
    );
};

const generateMarkdown = ({
    title,
    description,
    installation,
    useProject,
    licenses,
    contribute,
    test,
    github,
    email,

}) => {


    // template for the readme to populate to 
    const template = (
        `

# ${title}

## Description
${description}

## Table of contents


## Installation
${installation}

## Usage
${useProject}

## Contribution
${contribute}

## Test
${test}

## Github
${github}

## Email
${email}

${generateLicenseBadge(licenses)}

`
    );

    fs.writeFileSync('./output/ReadMe.md', template);
    console.log('generated template');
    process.exit();

};

    module.exports = generateMarkdown;

