import { FlatList, StyleSheet, View } from "react-native";
import { Title } from "../components/Title";
import { Items, RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { Item } from "../components/Item";

const data: Items = [
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

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const handleAddButtonPress = () => navigation.navigate("AddItem");

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item, index }) => (
          <Item
            name={item.name}
            photo={item.photo}
            index={index}
            value={item.value}
          />
        )}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
});
