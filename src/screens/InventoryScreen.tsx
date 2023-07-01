import { FlatList, StyleSheet, View } from "react-native";
import { Title } from "../components/Title";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { Item } from "../components/Item";
import { useContext } from "react";
import { InventoryContext } from "../service/InventoryService";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const { items } = useContext(InventoryContext);
  const handleAddButtonPress = () => navigation.navigate("AddItem");

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <FlatList
        numColumns={2}
        data={items}
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
