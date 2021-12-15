const { millisec, Sec, Min, Mins } = require("./index");

describe("converting", function () {
  test("convert time into string", function () {
    expect(millisec(Date.getMilliseconds)).toBe("milliseconds");
  });
});

describe("converting", function () {
  test("convert millis to secs", function () {
    expect(Sec(5200)).toBe(5 + " " + "Seconds");
  });
});

describe("converting", function () {
  test("convert millis to min", function () {
    expect(Min(60000)).toBe(1 + " " + "Minute");
  });
});

describe("converting", function () {
  test("convert millis to mins", function () {
    expect(Min(180000)).toBe(3 + " " + "Minutes");
  });
});

describe("converting", function () {
  test("convert millis to mins and secs", function () {
    expect(Mins(200000)).toBe(3 + " " + "minutes");
  });
});
