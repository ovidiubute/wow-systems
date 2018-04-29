import ItemQuality from "./ItemQuality";

export default class Item {
  name: string;
  stackable: boolean;
  level: number;
  quality: ItemQuality;

  constructor() {}
}
