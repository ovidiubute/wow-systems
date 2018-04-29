import Item from "./Item";

export default class Bag {
  private storage: Item[];
  private emptySlots: number;
  public readonly slots: number;

  constructor(slots: number) {
    if (slots <= 0 || !Number.isInteger(slots)) {
      throw new Error("Slots must be a positive integer!");
    }

    this.slots = slots;
    this.emptySlots = slots;
    this.storage = new Array<Item>();
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
    return new Item();
  }
}
