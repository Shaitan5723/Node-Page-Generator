

const generateTeamCards = (teamMemberData) => {

  const generateManager = (manager) => {
    return  `<div class="card col-3 offset-0.5" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text">Name: ${manager.name}
      ID: ${manager.ID}
      Email: ${manager.email}
      Office Number: ${manager.officeNumber}
      </p>
    </div>
  </div>
  </div>`
  }

  


}

function generateHTML() {
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
      ${generateTeamCards()}
    </div>

  </div>


</body>
</html>
  `
}

module.exports = generateHTML;