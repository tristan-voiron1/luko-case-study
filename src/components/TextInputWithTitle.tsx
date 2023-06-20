import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";

import { colors } from "../theme/colors";
import { TextInputWithTitleProps } from "./types";

export const TextInputWithTitle = ({
  title,
  placeholder,
  isMultiline = false,
}: TextInputWithTitleProps) => {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={colors.quaternaryGrey}
        multiline={isMultiline}
        numberOfLines={isMultiline ? 5 : 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textInput: {
    marginTop: 5,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.quaternaryGrey,
    backgroundColor: colors.white,
  },
});
