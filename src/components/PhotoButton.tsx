import { Pressable, PressableProps, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { Avatar } from "react-native-paper";

export default function PhotoButton({
  title,
  onPress,
}: PressableProps & { title: string }) {
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
      <Avatar.Icon
        size={60}
        icon="camera"
        color={colors.mainBlue}
        style={styles.icon}
      />
      <Text
        style={{
          fontSize: 17,
          color: colors.black,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "transparent",
  },
});
