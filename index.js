const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");
const { writeFile } = require('fs').promises;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project designed to do? Please enter a description.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, by providing a link to their GitHub profile utlizing the following format [username](https://github.com/username.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select your license.',
      choices: ["MIT", "GPLv3", "None "]
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.',
    },
  ]);
};

const init = () => {
  promptUser()

    .then((data) => writeFile('README.md', generateMarkdown(data)))
    .then(() => console.log('You have successfully created your README.md file.'))
    .catch((err) => console.error(err));
};
init();
