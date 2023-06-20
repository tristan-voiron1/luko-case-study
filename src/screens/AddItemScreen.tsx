import { StyleSheet, View } from "react-native";
import React from "react";

import Button from "../components/Button";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { TextInputWithTitle } from "../components/TextInputWithTitle";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled onPress={() => undefined} />
      </View>
      <View style={styles.textContainer}>
        <TextInputWithTitle title="Name" placeholder="Bracelet" />
        <TextInputWithTitle title="Value" placeholder="700€" />
        <TextInputWithTitle
          title="Description"
          placeholder="Optional"
          isMultiline={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  textContainer: {
    flex: 1,
    marginTop: 60,
  },
});
