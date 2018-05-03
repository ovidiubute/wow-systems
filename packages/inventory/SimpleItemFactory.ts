import SimpleItem from "./Item";
import ItemQuality from "./ItemQuality";
import ItemFactory from "./ItemFactory";

export default class SimpleItemFactory implements ItemFactory<SimpleItem> {
  create(
    name: string,
    stackable: boolean,
    level: number,
    quality: ItemQuality
  ): SimpleItem {
    return new SimpleItem(name, stackable, level, quality);
  }
}
