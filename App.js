import { StatusBar, SafeAreaView, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";

import Basket from "./src/screens/basket";
import mock from "./src/mocks/basket";

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}
