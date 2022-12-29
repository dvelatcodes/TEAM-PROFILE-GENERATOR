const Intern = require("../lib/Intern");

const check = new Intern("rose", "1i", "rose@gmail.com", "futa");

test("test if we can get the constructor values from the intern object", () => {
  expect(check.name).toBe("rose");
  expect(check.id).toBe("1i");
  expect(check.email).toBe("rose@gmail.com");
  expect(check.school).toBe("futa");
});

test("test if we can get the name from getName() method", () => {
  expect(check.getName()).toBe("rose");
});

test("test if we can get the id from getId() method", () => {
  expect(check.getId()).toBe("1i");
});

test("test if we can get the email from getEmail() method", () => {
  expect(check.getEmail()).toBe("rose@gmail.com");
});

test("test if we can get getGithubUsername from getGithubUsername() method", () => {
  expect(check.getSchool()).toBe("futa");
});
