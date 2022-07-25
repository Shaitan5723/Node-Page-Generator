const generateTeamCards = (teamMemberData) => {

  const teamPage = []; //empty array for team data

  const generateManager = (manager) => {
    return `<div class="card col-3 offset-1" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Manager</h5>
                <p class="card-text">Name: ${manager.name} </br>
                ID: ${manager.id} </br>
                Email: ${manager.email} </br>
                Office Number: ${manager.officeNumber} </br>
                </p>
              </div>
            </div>`
  }

  const generateEngineer = (engineer) => {
    return `<div class="card col-3 offset-1" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <p class="card-text">Name: ${engineer.name} </br>
                  ID: ${engineer.id} </br>
                  Email: ${engineer.email} </br>
                  Github: ${engineer.github} </br>
                </p>
              </div>
            </div>`
  }

  const generateIntern = (intern) => {
    return  `<div class="card col-3 offset-1" style="width: 18rem;">
              <div class="card-body">
               <h5 class="card-title">Intern</h5>
                <p class="card-text">Name: ${intern.name} </br>
                ID: ${intern.id} </br>
                Email: ${intern.email} </br>
                School: ${intern.school} </br>
                </p>
             </div>
            </div>`
  }

  for (let i = 0; i < teamMemberData.length; i++) {
    const employee = teamMemberData[i];
    const role = employee.getRole(); 
  

    if (role === 'Manager') {
    const managerCard = generateManager(employee);

    teamPage.push(managerCard);
  }
    if (role === 'Engineer') {
    const engineerCard = generateEngineer(employee);

    teamPage.push(engineerCard);
    }

    if (role === 'Intern') {
    const internCard = generateIntern(employee);

    teamPage.push(internCard);
    }
  }
    return teamPage.join('')

}

function generateHTML(teamMemberData) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Page</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" 
  rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" 
  crossorigin="anonymous">
  </head>
  <body>
  <header>
    <div style="height: 100px; background-color: rgba(21, 88, 195);">
        <h1 class="text-center">My Team</h1>
    </div>
  </header>

  <div class = "container">
      <div class = "row">
      ${generateTeamCards(teamMemberData)}
      </div>

  </div>

</body>
</html>
  `
}

module.exports = generateHTML;