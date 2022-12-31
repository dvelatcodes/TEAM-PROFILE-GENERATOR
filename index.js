const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("node:path");
const outputFolder = path.resolve(__dirname, "output");
const outputHTML = path.join(outputFolder, "index.html");
const generateTeam = require("./dist/Webpage");
const team = [];

const validateInput = (nameInput) => {
  if (nameInput) return true;
  else {
    console.log("Input field cannot be left empty");
    return false;
  }
};

const promptManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        // validate: validateInput(nameInput),
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee id?",
        // validate: validateInput(nameInput),
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        // validate: validateInput(nameInput),
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        // validate: validateInput(nameInput),
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      team.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please pick from these list of options",
        choices: [
          "add an engineer",
          "add an intern",
          "finish building my team",
        ],
        // validate: validateInput(nameInput),
      },
    ])
    .then((answer) => {
      if (answer.menu === "add an engineer") promptEngineer();
      if (answer.menu === "add an intern") promptIntern();
      if (answer.menu === "finish building my team") promptBuildTeam();
    });
};

const promptEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is your name?",
        // validate: validateInput(nameInput),
      },
      {
        type: "input",
        name: "id",
        message: "what is your id?",
        // validate: validateInput(nameInput),
      },
      {
        type: "input",
        name: "email",
        message: "what is your email address?",
        // validate: validateInput(nameInput),
      },
      {
        type: "input",
        name: "github",
        message: "what is your github account?",
        // validate: validateInput(nameInput),
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      team.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "name of intern?",
        // validate: validateInput(nameInput),
      },
      {
        type: "input",
        name: "id",
        message: "what is the intern's id?",
        // validate: validateInput(nameInput),
      },
      {
        type: "input",
        name: "email",
        message: "what is the intern's email address?",
        // validate: validateInput(nameInput),
      },
      {
        type: "input",
        name: "school",
        message: "what is the name of the intern's school?",
        // validate: validateInput(nameInput),
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      team.push(intern);
      promptMenu();
    });
};

const promptBuildTeam = () => {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }
  fs.writeFileSync(outputHTML, generateTeam(team), "utf-8");
};

promptManager();
