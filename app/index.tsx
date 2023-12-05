import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Baloo Bhai 2": require("../assets/fonts/BalooBhai2-Regular.ttf"),
  });
  return <SafeAreaView>{/* <Text>App</Text> */}</SafeAreaView>;
};

export default App;
