import { InventoryItem } from "../navigation/types";

export interface ItemProps
  extends Omit<InventoryItem, "description" | "type" | "id"> {
  index: number;
}

export interface TextInputWithTitleProps {
  title: string;
  placeholder: string;
  isMultiline?: boolean;
}
