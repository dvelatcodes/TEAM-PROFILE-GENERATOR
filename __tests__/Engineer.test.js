const Engineer = require("../lib/Engineer");

const check = new Engineer(
  "Emmanuel",
  "1e",
  "emmanuel@gmail.com",
  "github.com/emma"
);

test("test if we can get the constructor values from the engineer object", () => {
  expect(check.name).toBe("Emmanuel");
  expect(check.id).toBe("1e");
  expect(check.email).toBe("emmanuel@gmail.com");
  expect(check.githubUsername).toBe("github.com/emma");
});

test("test if we can get the name from getName() method", () => {
  expect(check.getName()).toBe("Emmanuel");
});

test("test if we can get the id from getId() method", () => {
  expect(check.getId()).toBe("1e");
});

test("test if we can get the email from getEmail() method", () => {
  expect(check.getEmail()).toBe("emmanuel@gmail.com");
});

test("test if we can get getGithubUsername from getGithubUsername() method", () => {
  expect(check.getGithubUsername()).toBe("github.com/emma");
});
