import ItemQuality from "./ItemQuality";

export abstract class Item {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  protected abstract clone(): Item;
}

export default class SimpleItem extends Item {
  stackable: boolean;
  quality: ItemQuality;

  constructor(
    name: string,
    stackable: boolean,
    level: number,
    quality: ItemQuality
  ) {
    super(name, level);

    this.stackable = stackable;
    this.quality = quality;
  }

  public clone(): Item {
    return new SimpleItem(this.name, this.stackable, this.level, this.quality);
  }
}
