import { View, StyleSheet, PressableProps, Pressable } from "react-native";
import { Avatar, Badge } from "react-native-paper";

export default function Photo({
  image,
  onPress,
}: PressableProps & { image: string }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
          alignItems: "center",
        },
      ]}
      pressRetentionOffset={20}
      hitSlop={20}
    >
      <Avatar.Image size={100} source={{ uri: image }} style={styles.icon} />
      <Badge>X</Badge>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    backgroundColor: "transparent",
  },
});
