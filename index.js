var inquirer = require("inquirer");
var fs = require("fs");

inquirer
    .prompt([
        // Github Username
        {
            type: "input",
            message: "Enter Github Username:",
            name: "github"
        },

        // Email Address
        {
            type: "input",
            message: "Enter Email Address:",
            name: "email"
        },

        // Title
        {
            type: "input",
            message: "Enter ReadMe Title:",
            name: "title"
        },

        // Description
        {
            message: "Enter Description:",
            name: "description",
        },

        // License
        {
            type: "list",
            message: "Select License:",
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None",],
            name: "license"
        },

        // Installation
        {
            type: "input",
            message: "Enter Installation Instructions:",
            default: "npm i",
            name: "installation"
        },

        // Test Command
        {
            type: "input",
            message: "Enter Test Command:",
            default: "npm test",
            name: "test"
        },

        // Usage
        {
            type: "input",
            message: "Enter Usage Instructions:",
            name: "usage"
        },

        // Contribution Guidelines
        {
            type: "input",
            message: "Enter Contribution Guidelines:",
            name: "contribution"
        },
    ])
    .then(function (response) {

        // Create ReadMe file and enter "title" as header.
        fs.writeFile("README.md", "# " + response.title, function (err) {
            if (err) {
                return console.log(err);
            }
        });

        // Append description.
        fs.appendFile("README.md", "\n\n" + response.description, function (err) {
            if (err) {
                return console.log(err);
            }
        });

        var tableOfContents = "* [Installation](#installation)\n\n* [Usage](#usage)\n\n* [License](#license)\n\n* [Contributing](#contributing)\n\n* [Tests](#tests)\n\n* [Questions](#questions)";

        // Append table of contents.
        fs.appendFile("README.md", "\n\n## Table of Contents" + "\n\n" + tableOfContents, function (err) {
            if (err) {
                return console.log(err);
            }
        });

        // Append installation section.
        fs.appendFile("README.md", "\n\n## Installation" + "\n\nTo install necessary dependencies, run the following command:\n\n```\n" + response.installation + "\n```", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        // Append usage section.
        fs.appendFile("README.md", "\n\n## Usage" + "\n\n" + response.usage, function (err) {
            if (err) {
                return console.log(err);
            }
        });

        // Append license section.
        fs.appendFile("README.md", "\n\n## License" + "\n\nThis project is licensed under the " + response.license + "license.", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        // Append contributing section.
        fs.appendFile("README.md", "\n\n## Contributing" + "\n\n" + response.contribution, function (err) {
            if (err) {
                return console.log(err);
            }
        });

        // Append tests section.
        fs.appendFile("README.md", "\n\n## Tests" + "\n\nTo run tests, run the following command:\n\n```\n" + response.test + "\n```", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        // Append contact section with username.
        fs.appendFile("README.md", "\n\n## Questions" + "\n\nIf you have any questions about the repo, open an issue or contact me directly by email at [" + response.email + "](mailto:" + response.email + "). You can find more of my work at [" + response.github + "](https://github.com/" + response.github + ")", function (err) {
            if (err) {
                return console.log(err);
            }
        });

        console.log("Success!");
    });