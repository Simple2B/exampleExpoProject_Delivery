import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import fonts from "@/assets/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Baloo Bhai 2": require("../assets/fonts/BalooBhai2-Regular.ttf"),
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Categories />
        <Text style={styles.headerText}>Top picks in your neighborhood</Text>
        <Restaurants />

        <Text style={styles.headerText}>Offers near you</Text>
        {/* <Restaurants /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 65,
    backgroundColor: colors.lightGray,
  },
  contentContainerStyle: {
    paddingBottom: 45,
  },
  headerText: {
    fontFamily: fonts.title,
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 5,
    marginTop: 15,
    paddingHorizontal: 20,
    color: colors.black,
  },
});

export default App;
