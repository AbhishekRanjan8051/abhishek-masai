function test(descripration, fn) {
  console.log(descripration);
  fn();
}

function expected(received) {
  function toBe(actual) {
    if (received === actual) {
      console.log("test passed");
    } else {
      console.log("test failed");
      console.log("received:", received);
      console.log("expected:", actual);
    }
  }
  return { toBe };
}

test("add 1 and 2 , sum should be 3", () => {
  expected(1 + 2).toBe(3);
});

//another example

const sum = (a, b) => {
  return a + b;
};

test("sum of (5,3) should be 8", () => {
  expected(sum(5, 3)).toBe(8);
});

const absDiff = (a, b) => {
 return Math.abs(a - b);
};

test("absDiff of (3,5) should be 2", () => {
  expected(absDiff(3, 5)).toBe(2);
});
