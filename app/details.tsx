import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { colors } from "@/constants/colors";
import { restaurant } from "@/assets/data/restaurants";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import fonts from "@/assets/fonts";

interface IDetails {}

const Details: React.FC<IDetails> = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: colors.white,
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerLeft}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={colors.lightSeaGreen}
            />
          </TouchableOpacity>
        );
      },
      headerRight: () => {
        return (
          <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.headerLeft}>
              <Ionicons
                name="share-outline"
                size={24}
                color={colors.lightSeaGreen}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.headerLeft}>
              <Ionicons
                name="search-outline"
                size={24}
                color={colors.lightSeaGreen}
              />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, []);
  return (
    <>
      <ParallaxScrollView
        backgroundColor={colors.white}
        style={styles.parallaxScrollView}
        parallaxHeaderHeight={300}
        stickyHeaderHeight={120}
        contentBackgroundColor={colors.lightGray}
        renderBackground={() => (
          <Image source={restaurant.img} style={styles.backgroundImage} />
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}
      >
        <View style={styles.detailsContainer}>
          <Text>Details</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  parallaxScrollView: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    backgroundColor: colors.lightGray,
  },
  stickySection: {
    // backgroundColor: colors.lightSeaGreen,
    marginLeft: 70,
    height: Platform.OS === "ios" ? 100 : 75,
    justifyContent: "flex-end",
  },
  stickySectionText: {
    fontFamily: fonts.text,
    fontSize: 18,
    fontWeight: "600",
    margin: 10,
  },
  headerLeft: {
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
