export default class Bag<T> {
  private storage: T[] = [];
  private emptySlots: number;
  public readonly size: number;

  constructor(size: number) {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error("Size must be a positive integer!");
    }

    this.size = size;
    this.emptySlots = size;
    // this.storage.fill(null, 0, size - 1);
  }

  public put(item: T): void {
    if (!this.emptySlots) {
      throw new Error("Bag is full!");
    }
  }

  public isFull(): boolean {
    return this.emptySlots > 0;
  }

  public take(position: number): T {
    // if (this.storage[position] instanceof T) {
    //   throw new Error(`No item found at position: ${position}`);
    // } else {
    return this.storage[position];
    // }
  }
}
