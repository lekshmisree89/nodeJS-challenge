// TODO: Create a function that returns a license badge based on which license 
//is passed in, If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''; // Return an empty string if no license is selected
  }
  return `![License](https://img.shields.io/badge/license-${license.replace})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

  function renderLicenseLink(license) {
    if (license === 'None') {
      return ''; // Return an empty string if no license is selected
    }
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPL 3.0':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      default:
        return '';
    }
  }
  


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''; // Return an empty string if no license is selected
  }
  return `
## License
This project is licensed under the ${license} license. 
For more information, visit(${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at ${data.email}.
Visit my [GitHub profile](https://github.com/${data.github}).
`;
}

export default generateMarkdown;


