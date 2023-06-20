import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { fonts } from "./src/theme/fonts";
import { ActivityIndicator } from "react-native";
import { Items } from "./src/navigation/types";
import { createContext } from "react";

export const InventoryContext = createContext<Items>([
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
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.regular]:
      "https://fonts.cdnfonts.com/s/15011/CircularStd-Medium.woff",
    [fonts.bold]: "https://fonts.cdnfonts.com/s/15011/CircularStd-Bold.woff",
  });
  if (!fontsLoaded)
    return (
      <ActivityIndicator
        size="large"
        style={{ justifyContent: "center", flex: 1 }}
      />
    );
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}
