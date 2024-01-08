import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { categories } from "@/assets/data/categories";
import fonts from "@/assets/fonts";
import { colors } from "@/constants/colors";

interface ICategories {}

const Categories: React.FC<ICategories> = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {categories.map((category, index) => {
        return (
          <View key={index} style={styles.categoryCard}>
            <Image style={styles.categoryCardImg} source={category.image} />
            <Text style={styles.categoryCardText}>{category.name}</Text>
          </View>
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
  categoryCard: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 10,
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    borderRadius: 6,
  },
  categoryCardImg: {
    width: 115,
    height: 85,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  categoryCardText: {
    alignSelf: "flex-start",
    paddingLeft: 10,
    // paddingBottom: 5,
    // paddingTop: 5,
    fontFamily: fonts.text,
    fontWeight: "800",
    fontSize: 16,
    color: colors.secondary,
  },
});

export default Categories;
