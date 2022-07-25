const Intern = require("../lib/Intern");

describe('Intern', () => {
  it("should return an object containing a 'school' property when called with the 'new' keyword", () =>{
    const intern = new Intern();
 
    expect("school" in intern).toEqual(true);
  });
  it("should be able to set a 'school' property using the constructor", () =>{
    let school = "bestSchool"
    const intern = new Intern("Dave", 5000, "Dave@test.com", school);
    
    expect(intern.school).toBe(school);
  });
  it("should be able to get a 'school name' using the getSchool function", () =>{
    let school = "bestSchool"
    const intern = new Intern("Dave", 5000, "Dave@test.com", school);
    
    expect(intern.getSchool()).toBe(school);
  });
  it("should return 'Intern' using the getRole function", () =>{
    const intern = new Intern("Dave", 5000, "Dave@test.com", "bestSchool");
    let testRole = "Intern"
    expect(intern.getRole()).toBe(testRole);
  });
})