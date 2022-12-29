const Manager = require("../lib/Manager");

const check = new Manager("peter", "1m", "peter@gmail.com", "101");

test("test if we can get the constructor values from the manager object", () => {
  expect(check.name).toBe("peter");
  expect(check.id).toBe("1m");
  expect(check.email).toBe("peter@gmail.com");
  expect(check.officeNumber).toBe("101");
});

test("test if we can get the name from getName() method", () => {
  expect(check.getName()).toBe("peter");
});

test("test if we can get the id from getId() method", () => {
  expect(check.getId()).toBe("1m");
});

test("test if we can get the email from getEmail() method", () => {
  expect(check.getEmail()).toBe("peter@gmail.com");
});

test("test if we can get getGithubUsername from getGithubUsername() method", () => {
  expect(check.getOfficeNumber()).toBe("101");
});
