const sum = require("./index");

// console.log(sum(5, 3));

describe("sum function is defined", () => {
  test("sum is def", () => {
    expect(sum).toBeDefined();
  });
});
describe("another test checking", () => {
  test("toBe", () => {
    expect(10).toBe(10);
  });
  test("toBe", () => {
    expect(false).toBe(false);
  });
  test("toBe", () => {
    expect({}).toStrictEqual({});
  });
});

// check value equality

describe("equal", () => {
  test("array is equal []", () => {
    expect([2]).toEqual([2]);
  });
  test("array a and b is equal []", () => {
    let a = [1, 2];
    let b = [1, 2];
    expect([a]).toEqual([b]);
  });

  // not Equal
  test("array a and b is not equal []", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    expect([a]).not.toEqual([b]);
  });

  // if array element present in array  b
  test("array a and b is not equal []", () => {
    let a = [1, 2, 3];
    let b = [1, 2];
    expect(a).toEqual(expect.arrayContaining(b));
  });
});
