

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
  
  `
}

module.exports = generateTeamCards;