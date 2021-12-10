const sum = require("./index");

// console.log(sum(5, 3));

describe("sum function is defined", () => {
  test("sum is def", () => {
    expect(sum).toBeDefined();
  });
});


