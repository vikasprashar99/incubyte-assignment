const { add } = require("./StringCalculator");

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });
});
