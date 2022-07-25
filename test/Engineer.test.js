const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
  it("should return an object containing a 'github' property when called with the 'new' keyword", () =>{
    const engineer = new Engineer();
 
    expect("github" in engineer).toEqual(true);
  });
  it("should be able to set a 'github' property using the constructor", () =>{
    let github = "userBob"
    const engineer = new Engineer("Bob", 3000, "Bob@test.com", github);
    
    expect(engineer.github).toBe(github);
  });
  it("should be able to get a 'github username' using the getGithub function", () =>{
    let github = "userBob"
    const engineer = new Engineer("Bob", 3000, "Bob@test.com", github);
    
    expect(engineer.getGithub()).toBe(github);
  });
  it("should return 'Engineer' using the getRole function", () =>{
    const engineer = new Engineer("Bob", 3000, "Bob@test.com", "userBob");
    let testRole = "Engineer"
    expect(engineer.getRole()).toBe(testRole);
  });
})
