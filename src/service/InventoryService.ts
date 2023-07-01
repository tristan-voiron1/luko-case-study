import { createContext, useEffect, useMemo, useState } from "react";
import { InventoryItem, Items } from "../navigation/types";

const VALUE_LIMIT = 40000;

const initialItems: Items = [
  {
    id: "1",
    name: "Cartier ring",
    value: 5780,
    type: "JEWELRY",
    description: "Gift from my grandfather",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
    id: "2",
    name: "Guitar",
    value: 850,
    type: "MUSIC_INSTRUMENT",
    photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
  },
];

export const useInventory = () => {
  const [items, setItems] = useState<Items>(initialItems);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let value = 0;
    for (const item of items) {
      value += Number(item.value);
    }
    setTotalValue(value);
  }, []);

  function addAnItem(item: InventoryItem): boolean {
    if (totalValue + Number(item.value) <= VALUE_LIMIT) {
      setItems([...items, item]);
      setTotalValue(totalValue + Number(item.value));
      return true;
    } else {
      return false;
    }
  }

  const value = useMemo(
    () => ({ items, totalValue, addAnItem }),
    [items, totalValue]
  );

  return value;
};
export const InventoryContext = createContext<{
  items: Items;
  totalValue: number;
  addAnItem: (item: InventoryItem) => boolean;
}>({
  items: [],
  totalValue: 0,
  addAnItem: () => true,
});
