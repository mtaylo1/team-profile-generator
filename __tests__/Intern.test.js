const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UofT";
  const e = new Intern("Randname", 1, "testname@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Intname", 1, "Randname", "UofT");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UofT";
  const e = new Intern("Intname", 1, "testname@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});