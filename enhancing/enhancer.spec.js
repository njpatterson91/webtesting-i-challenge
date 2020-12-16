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
