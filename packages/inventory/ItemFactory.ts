import { Item } from "./Item";

export default interface ItemFactory<T extends Item> {
  create(...args: any[]): T;
}
