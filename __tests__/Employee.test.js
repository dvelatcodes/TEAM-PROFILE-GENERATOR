const Employee = require("../lib/Employee");

const check = new Employee("sam", "0", "sam@gmail.com");

test("test if we can get the constructor values from the employee object", () => {
  expect(check.name).toBe("sam");
  expect(check.id).toBe("0");
  expect(check.email).toBe("sam@gmail.com");
});

test("test if we can get the name from getName() method", () => {
  expect(check.getName()).toBe("sam");
});

test("test if we can get the id from getId() method", () => {
  expect(check.getId()).toBe("0");
});

test("test if we can get the email from getEmail() method", () => {
  expect(check.getEmail()).toBe("sam@gmail.com");
});
