const checking = require("./index");

describe("password", () => {
  test("checking", () => {
    expect(checking("abhishek")).toBe("Password must have capital letter.");
  });

  test("checking", () => {
    expect(checking("A@b1")).toBe("password must have atleast 6 characters.");
  });

  test("checking", () => {
    expect(checking("ABHISHEK@123")).toBe("Password must have a lowercase letter.");
  });

  test("checking", () => {
    expect(checking("Abhishek@")).toBe("Password must have digit/number");
  });

  test("checking", () => {
    expect(checking("Abhishek123")).toBe("Password must have special character");
  });

    test("checking", () => {
      expect(checking("Abhishek@123")).toBe("Perfect password");
    });
});
