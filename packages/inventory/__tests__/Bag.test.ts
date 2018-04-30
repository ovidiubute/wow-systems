import Bag from "../Bag";

describe("Bag", () => {
  it("should throw if size is not a positive integer", () => {
    expect(() => new Bag(0)).toThrow();
    expect(() => new Bag(-4)).toThrow();
  });
});
