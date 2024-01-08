import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
import { colors } from "@/constants/colors";
import fonts from "@/assets/fonts";
import { getDishById } from "@/assets/data/restaurants";

const Dish = () => {
  const { id } = useLocalSearchParams();
  const item = getDishById(Number(id));

  const router = useRouter();

  const addToCard = async () => {
    // await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        entering={FadeInLeft.duration(400).delay(400)}
        source={item?.img}
        style={styles.img}
      />
      <View style={styles.content}>
        <Animated.Text
          entering={FadeInRight.duration(400).delay(200)}
          style={styles.textTitle}
        >
          {item?.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInRight.duration(400).delay(400)}
          style={styles.textDescription}
        >
          {item?.info}
        </Animated.Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <TouchableOpacity style={styles.button} onPress={addToCard}>
            <Text style={styles.buttonText}>Add for ${item?.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  img: {
    width: "100%",
    height: 300,
  },
  content: {
    padding: 20,
    backgroundColor: colors.white,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "900",
    fontFamily: fonts.title,
    marginBottom: 8,
  },
  textDescription: {
    fontSize: 18,
    fontFamily: fonts.text,
    color: colors.darkgray,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: Platform.OS === "ios" ? 40 : 30,
    left: 0,
    right: 0,
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  button: {
    width: "100%",
    backgroundColor: colors.secondary,
    padding: 8,
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: fonts.text,
    color: colors.white,
  },
});

export default Dish;
