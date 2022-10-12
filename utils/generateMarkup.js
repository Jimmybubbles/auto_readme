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


const fs = require('fs');


function generateLicenseBadge(type) {

    let color;
    // choices: ['mit', 'cc', 'apache', 'none'],
    // let color;
    if (type === "MIT") color = "brightgreen";
    if (type === "CC") color = 'brightgreen';
    if (type === "Apache") color = "orange";
    if (type === "NONE") color = "red";
    
    return (
        `
## Licences

  <img src="https://img.shields.io/badge/license-${type}-${color}"/>
   `
    );
};

const generateMarkdown = ({
    Title,
    Description,
    Installation,
    UseProject,
    Licenses,
    Contribute,
    Test,
    Github,
    Email,

}) => {


    // template for the readme to populate to 
    const template = (
`# ${Title}

## Description
${Description}

## Table of contents
1. [Installation](#Installation)
2. [UseCase](#UseCase)
3. [Contribution](#Contribution)
4. [Test](#Test)
5. [Github](#Github)
6. [Email](#Email)


## Installation
${Installation}

## Usage
${UseProject}

## Contribution
${Contribute}

## Test
${Test}

## Github
${Github}

## Email
${Email}

${generateLicenseBadge(Licenses)}

`
    );

    fs.writeFileSync('./output/ReadMe.md', template);
    console.log('generated template');
    process.exit();

};

    module.exports = generateMarkdown;

