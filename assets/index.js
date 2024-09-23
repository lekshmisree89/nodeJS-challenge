//DEPENDENCIES
import inquirer from 'inquirer';
import fs from 'fs';


inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: "What's the title of your project?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
])
.then(answers => {
  // Use the answers to create a README template
  const readmeContent = generateReadme(answers);
  
  // Write the content to a README.md file
  fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});


//generate readme content
function generateReadme(answers) {
    return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions, you can reach me at ${answers.email}.
  Visit my [GitHub profile](https://github.com/${answers.github}) for more projects.
    `;
  }
  