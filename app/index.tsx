import { Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";

import {OpenAPI} from "../src/services";
import AsyncStorage from '@react-native-async-storage/async-storage';

OpenAPI.BASE = process.env.REACT_APP_MY_OPEN_API_URL ?? 'https://api.delivery.simple2b.net';
OpenAPI.TOKEN = async () => (await AsyncStorage.getItem("userToken")) ?? '';

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    "Baloo Bhai 2": require("../assets/fonts/BalooBhai2-Regular.ttf"),
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.lightGray,
  }
});

export default Welcome;

