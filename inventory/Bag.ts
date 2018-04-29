import Item from "./Item";

export default class Bag {
  private storage: Item[];
  public readonly size: number;

  constructor(size: number) {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error("Size must be a positive integer!");
    }

    this.size = size;
    this.storage = new Array<Item>();
  }

  public put(item: Item): void {}

  public take(position: number): Item {
    return new Item();
  }
}
