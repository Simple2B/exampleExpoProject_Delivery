import {  StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { colors } from "@/constants/colors";
import Login from "@/components/Login/Login";

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    "BalooBhai2": require("../assets/fonts/BalooBhai2-Regular.ttf"),
    "SpaceMono": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
 
  return (
    <SafeAreaView style={styles.container}>
      <Login/>
      <View style={styles.socialNetworksContainer}>
      </View>
      <View style={styles.signUpContainer}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.lightGray,
  },
  
  socialNetworksContainer: {},
  signUpContainer: {}
});

export default Welcome;

