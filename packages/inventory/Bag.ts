import Item from "./Item";

export default class Bag<T extends Item> {
  private storage: T[];
  private emptySlots: number;
  public readonly size: number;

  constructor(size: number) {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error("Size must be a positive integer!");
    }

    this.size = size;
    this.emptySlots = size;
    this.storage = new Array<T>(size);
  }

  public put(item: T): Bag<T> {
    if (!this.emptySlots) {
      throw new Error("Bag is full!");
    }

    for (let i = 0; i < this.size; i++) {
      let x = this.storage[i];
      if (x === null) {
        x = item.clone() as T;
        this.emptySlots--;
        return this;
      }
    }

    return this;
  }

  public isFull(): boolean {
    return this.emptySlots > 0;
  }

  public peek(position: number): T {
    const x = this.storage[position];

    if (x === null) {
      throw new Error(`No item found at position: ${position}`);
    }

    return x;
  }
}
