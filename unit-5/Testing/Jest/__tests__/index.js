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

  // obj checking

  test("array a and b is not equal {}", () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });

  // eamil checker

  test("array a and b is not equal {}", () => {
    let obj = { username: "masaischool", email: "#masai@masaischool.com" };
    let out = {
      username: expect.any(String),
      email: expect.stringContaining("#","@masaischool.com"),
    };

    expect(obj).toEqual(out);
  });

  test("username present or not present", () => {
    let username = ['masai','admin','abhishek','ranjan']
    expect(username).toContain('masai')
    expect(username).toContain('ranjan')
  })
});


// operator tests

describe("oparator checking", () => {
  test("value is <= 300",()=>{
    let m = 100;
    let n = 150;

    expect(m+n).toBeLessThanOrEqual(300);
  })
  test("value is < 300",()=>{
    let m = 100;
    let n = 120;

    expect(m+n).toBeLessThanOrEqual(300);
  })
  // length checking
  test("length testing",()=>{
    let m = "masaischool"
    let n = m.length;

    expect(n).toBeGreaterThan(6 )
  })
})