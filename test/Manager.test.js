const Manager = require("../lib/Manager");

describe('Manager', () => {
  it("should return an object containing a 'officeNumber' property when called with the 'new' keyword", () =>{
    const manager = new Manager();
 
    expect("officeNumber" in manager).toEqual(true);
  });
  it("should be able to set a 'officeNumber' property using the constructor", () =>{
    let officeNumber = 23
    const manager = new Manager("Leslie", 6000, "Leslie@test.com", officeNumber);
    
    expect(manager.officeNumber).toBe(officeNumber);
  });

  it("should return 'Manager' using the getRole function", () =>{
    const manager = new Manager("Leslie", 6000, "Leslie@test.com", 23);
    let testRole = "Manager"
    expect(manager.getRole()).toBe(testRole);
  });
})