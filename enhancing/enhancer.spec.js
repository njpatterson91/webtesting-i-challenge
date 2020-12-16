const enhancer = require("./enhancer.js");
// test away!
describe("Sanity Check", () => {
  it("works", () => {
    expect(2 + 2).toBe(4);
  });
  test("everything working", () => {
    // THIS is another test
    expect({}).not.toBe({});
    expect({}).toEqual({});
  });
});
describe("Success enhancer function", () => {
  let levelUp = {
    name: "the sword",
    durability: 95,
    level: 15,
  };
  let maxLevelItem = {
    name: "the sword",
    durability: 95,
    level: 20,
  };
  it("Is defined", () => {
    expect(enhancer.success).toBeDefined();
  });
  it("Level up works", () => {
    const level = enhancer.success(levelUp);
    expect(level.level).toBe(16);
  });
  it("Already max level", () => {
    const maxLevel = enhancer.success(maxLevelItem);
    expect(maxLevel.level).toBe(20);
  });
});
describe("Fail enhancer function", () => {
  let firstFail = {
    name: "the sword",
    durability: 95,
    level: 14,
  };
  let secondFail = {
    name: "the sword",
    durability: 95,
    level: 15,
  };
  let thirdFail = {
    name: "the sword",
    durability: 95,
    level: 16,
  };
  it("Is defined", () => {
    expect(enhancer.fail).toBeDefined();
  });
  it("Failure level less than 15", () => {
    const firstFailure = enhancer.fail(firstFail);
    expect(firstFailure.durability).toBe(90);
  });
  it("Failure level 15", () => {
    const secondFailure = enhancer.fail(secondFail);
    expect(secondFailure.durability).toBe(85);
  });
  it("Failure level greter than 15", () => {
    const thirdFailure = enhancer.fail(thirdFail);
    expect(thirdFailure.durability).toBe(85);
    expect(thirdFailure.level).toBe(15);
  });
});

describe("Repair item", () => {
  let repair = {
    name: "the sword",
    durability: 95,
    level: 14,
  };
  it("Fully repaird", () => {
    const repaired = enhancer.repair(repair);
    expect(repaired.durability).toBe(100);
  });
});
