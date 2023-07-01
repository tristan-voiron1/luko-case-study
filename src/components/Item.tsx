import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { ItemProps } from "./types";
import { transformPrice } from "../utils";

export const Item = ({ name, photo, index, value }: ItemProps) => (
  <View style={itemStyles(index).container}>
    <Image style={itemStyles(index).image} source={{ uri: photo }} />
    <View style={itemStyles(index).textContainer}>
      <Text style={itemStyles(index).name}>{name}</Text>
      <Text style={itemStyles(index).value}>{transformPrice(value)}</Text>
    </View>
  </View>
);

const itemStyles = (index: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      marginVertical: 20,
      flex: 1,
      flexGrow: 1,
      borderRadius: 14,
      marginRight: index % 2 !== 0 ? 0 : 10,
    },
    textContainer: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      flex: 1,
      justifyContent: "space-between",
    },
    name: {
      fontSize: 19,
      fontFamily: fonts.regular,
      color: colors.secondaryGrey,
    },
    value: {
      fontSize: 14,
      fontFamily: fonts.regular,
      color: colors.tertiaryGrey,
    },
    image: {
      aspectRatio: 1,
      borderTopRightRadius: 14,
      borderTopLeftRadius: 14,
    },
  });
