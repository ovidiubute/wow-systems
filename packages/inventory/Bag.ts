import Item from "./Item";

export default class Bag {
  private storage: Item[];
  private emptySlots: number;
  public readonly size: number;

  constructor(size: number) {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error("Size must be a positive integer!");
    }

    this.size = size;
    this.emptySlots = size;
    this.storage = new Array<Item>().fill(null, 0, size - 1);
  }

  public put(item: Item): void {
    if (!this.emptySlots) {
      throw new Error("Bag is full!");
    }
  }

  public isFull(): boolean {
    return this.emptySlots > 0;
  }

  public take(position: number): Item {
    if (this.storage[position] === null) {
      throw new Error(`No item found at position: ${position}`);
    }
  }
}
