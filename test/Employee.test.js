const { it } = require("node:test");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe('Employee', () => {
  it("should return an object containing a 'name' property when called with the 'new' keyword", () =>{
    const employee = new Employee();
 
    expect("name" in employee).toEqual(true);
  });
  it("should return an object containing an 'id' property when called with the 'new' keyword", () =>{
    const employee = new Employee();

    expect("id" in employee).toEqual(true);
  });
  it("should return an object containing an 'email' property when called with the 'new' keyword", () =>{
    const employee = new Employee();

    expect("email" in employee).toEqual(true);
  });
  it("should be able to set a new 'name' using the constructor", () =>{
    const employee = new Employee(name);
    let name = "Bob"
    expect(employee.name).toBe(name);
  });
  it("should be able to set a new 'id' using the constructor", () =>{
    const employee = new Employee("Bob", id);
    let id = 5015
    expect(employee.id).toBe(id);
  });
  it("should be able to set a new 'email' using the constructor", () =>{
    const employee = new Employee("Bob", 5015, email);
    let email = "Bob@test.com"
    expect(employee.email).toBe(email);
  });
  it("should be able to get a 'name' using the getName function", () =>{
    const employee = new Employee(testName);
    let testName = "Bob"
    expect(employee.getName).toBe(testName);
  });
  it("should be able to get an 'id' using the getID function", () =>{
    const employee = new Employee("Bob", testID);
    let testID = 3000
    expect(employee.getID).toBe(testID);
  });
  it("should be able to get an 'email' using the getEmail function", () =>{
    const employee = new Employee("Bob", 3000, testEmail);
    let testEmail = "Bob@test.com"
    expect(employee.getEmail).toBe(testEmail);
  });
  it("should be able to get a 'role' using the getRole function", () =>{
    const employee = new Employee("Bob", 3000, "Bob@test.com");
    let testRole = "Employee"
    expect(employee.getRole).toBe(testRole);
  });
})
