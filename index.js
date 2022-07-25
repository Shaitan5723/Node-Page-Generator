const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const generateHTML = require("./src/htmltemplate");
const teamMemberData = [];

const managerQuestions = [
  { // User input type of question
    type: 'input',
    name: 'managerName',
    message: 'What is the name of the manager?',
  },
  {
    type: 'input',
    name: 'managerID',
    message: 'What is the employee ID of the manager?',
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'What is the email address of the manager?',
  },
  {
    type: 'input',
    name: 'managerOffice',
    message: 'What is the office number of the manager?',
  },
]

const selectTeam = [
  { // List of options once manager is selected
    type: 'list',
    name: 'teamSelect',
    message: 'Please select a new member of your team',
    choices: ['Engineer', 'Intern', 'I have finished building my team']
  }
]

const engineerQuestions = [
  { // User input type of question
    type: 'input',
    name: 'engineerName',
    message: 'What is the name of the engineer?',
  },
  {
    type: 'input',
    name: 'engineerID',
    message: 'What is the employee ID of the engineer?',
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: 'What is the email address of the engineer?',
  },
  {
    type: 'input',
    name: 'engineerGithub',
    message: 'What is the Github username of the engineer?',
  },

]

const internQuestions =[
  { // User input type of question
    type: 'input',
    name: 'internName',
    message: 'What is the name of the intern?',
  },
  {
    type: 'input',
    name: 'internID',
    message: 'What is the employee ID of the intern?',
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'What is the email address of the intern?',
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'Which school does the intern go to?',
  },
]

const init = () => {
  inquirer.prompt(managerQuestions) //prompts the users with the manager's questions listed above
    .then((managerData) => {
      const manager = new Manager()
        manager.name = managerData.managerName
        manager.id = managerData.managerID
        manager.email = managerData.managerEmail
        manager.officeNumber = managerData.managerOffice
        console.log(manager)
        teamMemberData.push(manager)
        teamSelect();
    })
    
}

const teamSelect = () => {
  inquirer.prompt(selectTeam)
    .then((selected) => {
    switch (selected.teamSelect) {
      case "Engineer": 
        engQ();
        break;

      case "Intern":
        internQ();
        break;

      case "I have finished building my team":
      console.log("Congratulations on building your team!")
      console.log("Lets take a look at who they are.")  
      console.log(teamMemberData);
      generatePage();
      break;
      
      default:
        return console.log("Oops, something went wrong, please run the program again")
    }
  })
}

const engQ = () => {
  inquirer.prompt(engineerQuestions) //prompts the users with the engineer's questions listed above
  .then((engineerData) => {
    const engineer = new Engineer()
      engineer.name = engineerData.engineerName
      engineer.id = engineerData.engineerID
      engineer.email = engineerData.engineerEmail
      engineer.github = engineerData.engineerGithub
      console.log(engineer)
      teamMemberData.push(engineer)
      teamSelect();
    })
    
}

const internQ = () => {
  inquirer.prompt(internQuestions) //prompts the users with the engineer's questions listed above
  .then((internData) => {
    const intern = new Intern()
      intern.name = internData.internName
      intern.id = internData.internID
      intern.email = internData.internEmail
      intern.school = internData.internSchool
      console.log(intern)
      teamMemberData.push(intern)
      teamSelect();
    })  
}

const generatePage = () => {
  fs.writeFile('./dist/myTeam.html', generateHTML(teamMemberData), (err) => {
    if (err) {
      return console.error(err)
    } else {
      return console.log("Team Page generated!")
    }
  }) 
}

init();