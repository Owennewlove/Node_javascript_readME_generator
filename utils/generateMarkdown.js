
function renderLicenseBadge(license) {
  if (license === "Apache") {  
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' 

  }
  else if (license === "Boost") {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

  }
  else if (license === "Eclipse") {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    
  }
  else if (license === "IBM") {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    
  }
  else if (license === "ISC") {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    
  }
  else if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    
  }
  else {
    return ""
  }
}


function renderLicenseLink(license) {

  if (license === "Apache") {  
    return '[Apache License](https://opensource.org/licenses/Apache-2.0)' 

  }
  else if (license === "Boost") {
    return '[Boost License](https://www.boost.org/LICENSE_1_0.txt)'

  }
  else if (license === "Eclipse") {
    return '[Eclipse License](https://opensource.org/licenses/EPL-1.0)'
    
  }
  else if (license === "IBM") {
    return '[IBM License](https://opensource.org/licenses/IPL-1.0)'
    
  }
  else if (license === "ISC") {
    return '[ISC License](https://opensource.org/licenses/ISC)'
    
  }
  else if (license === "MIT") {
    return '[MIT License](https://opensource.org/licenses/MIT)'
    
  }
  else {
    return ""
  }

}


/** this repository is licensed under the term of blank license then link to blank license */


function renderLicenseSection(license) {
  
  return `this repository is licensed under the term of ${renderLicenseLink(license)}`
}


function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}

  


  ## Description
  
  ${data.description} 
  
  ## Table of Contents 
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
   
  ## Usage
  
  ${data.usage}
     
  
  ## Credits

  ${data.credits}
  
  
  
  ## License
  
  ${renderLicenseSection(data.license)}

  ---
  
  
  ## How to Contribute

  ${data.contributing}
  
  

  ## Tests

  ${data.test}
  

  ## Questions

  If there are any questions about the application, please reference the following.

  Email: ${data.email}
  GitHub: ${data.github} (https://github.com/${data.github})



`;
}

module.exports = generateMarkdown;
