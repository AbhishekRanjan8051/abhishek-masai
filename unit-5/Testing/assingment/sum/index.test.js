const sum = require("./index");



// Equal to
describe("checking / testing sum", () => {
  test("sum Equal", () => {
    expect(sum(5, 3)).toBe(8);
  });
});


// Not Equal to
describe("checking / testing sum", () => {
  test("sum not Equal", () => {
    expect(sum(5, 3)).not.toBe(9);
  });
});

