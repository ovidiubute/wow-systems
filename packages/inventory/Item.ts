import ItemQuality from "./ItemQuality";

export default class Item {
  name: string;
  stackable: boolean;
  level: number;
  quality: ItemQuality;

  constructor(
    name: string,
    stackable: boolean,
    level: number,
    quality: ItemQuality
  ) {
    this.name = name;
    this.stackable = stackable;
    this.level = level;
    this.quality = quality;
  }
}
