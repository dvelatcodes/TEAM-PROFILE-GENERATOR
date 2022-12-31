const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("node:path");
const outputFolder = path.resolve(__dirname, "output");
const outputHTML = path.join(outputFolder, "index.html");
const team = [];

const validateInput = (data) => {
  if (data) return true;
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
        validate: validateInput(data),
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee id?",
        validate: validateInput(data),
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: validateInput(data),
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        validate: validateInput(data),
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

const promptMenu = (data) => {
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
        validate: validateInput(data),
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
        validate: validateInput(data),
      },
      {
        type: "input",
        name: "id",
        message: "what is your id?",
        validate: validateInput(data),
      },
      {
        type: "input",
        name: "email",
        message: "what is your email address?",
        validate: validateInput(data),
      },
      {
        type: "input",
        name: "github",
        message: "what is your github account?",
        validate: validateInput(data),
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
        validate: validateInput(data),
      },
      {
        type: "input",
        name: "id",
        message: "what is the intern's id?",
        validate: validateInput(data),
      },
      {
        type: "input",
        name: "email",
        message: "what is the intern's email address?",
        validate: validateInput(data),
      },
      {
        type: "input",
        name: "school",
        message: "what is the name of the intern's school?",
        validate: validateInput(data),
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

const buildTeam = () => {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }
  fs.writeFileSync(outputHTML, generateTeam(team), "utf-8");
};

promptManager();
