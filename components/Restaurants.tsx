import {
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  View,
} from "react-native";
import React from "react";
import fonts from "@/assets/fonts";
import { colors } from "@/constants/colors";
import { restaurants } from "@/assets/data/restaurants";
import { Link } from "expo-router";

interface IRestaurants {}

const Restaurants: React.FC<IRestaurants> = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {restaurants.map((restaurant, index) => {
        return (
          <Link href={"/"} key={index} asChild>
            <TouchableOpacity>
              <View style={styles.card}>
                <Image style={styles.cardImg} source={restaurant.img} />
                <View style={styles.box}>
                  <Text style={styles.cardText}>{restaurant.name}</Text>
                  <Text style={styles.cardTextRating}>
                    {restaurant.rating} {restaurant.ratings}
                  </Text>

                  <Text style={styles.text}>{restaurant.distance}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 5,
    marginBottom: 3,
    marginTop: 3,
  },
  card: {
    width: 300,
    height: 250,
    backgroundColor: colors.white,
    marginEnd: 10,
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    borderRadius: 8,
  },
  cardImg: {
    flex: 5,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardText: {
    fontFamily: fonts.text,
    fontWeight: "700",
    fontSize: 16,
    color: colors.black,
  },
  cardTextRating: {
    fontFamily: fonts.text,
    fontWeight: "500",
    fontSize: 14,
    color: colors.darkOrange,
  },
  text: {
    fontFamily: fonts.text,
    fontWeight: "600",
    fontSize: 13,
    color: colors.darkgray,
  },
  box: {
    flex: 2,
    paddingLeft: 10,
    paddingVertical: 10,
  },
});

export default Restaurants;
