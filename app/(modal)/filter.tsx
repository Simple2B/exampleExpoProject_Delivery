import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { colors } from "@/constants/colors";
import fonts from "@/assets/fonts";
import { categories } from "@/assets/data/filters";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface ICategory {
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => {
  return (
    <>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="arrow-down-outline"
            size={20}
            color={colors.darkgray}
          />
          <Text style={styles.itemText}>Sort</Text>
          <Ionicons name="chevron-forward" size={22} color={colors.secondary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="fast-food-outline"
            size={20}
            color={colors.darkgray}
          />
          <Text style={styles.itemText}>Hygiene rating</Text>
          <Ionicons name="chevron-forward" size={22} color={colors.secondary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="pricetag-outline" size={20} color={colors.darkgray} />
          <Text style={styles.itemText}>Offers</Text>
          <Ionicons name="chevron-forward" size={22} color={colors.secondary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="nutrition-outline"
            size={20}
            color={colors.darkgray}
          />
          <Text style={styles.itemText}>Dietary</Text>
          <Ionicons name="chevron-forward" size={22} color={colors.secondary} />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Category</Text>
    </>
  );
};

interface IFilter {}

const Filter: React.FC<IFilter> = () => {
  const navigation = useNavigation();

  const renderItemCategory: ListRenderItem<ICategory> = ({ item }) => {
    return (
      <View style={styles.itemCategory}>
        <Text style={styles.itemCategoryText}>
          {item.name} ({item.count})
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItemCategory}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={{ height: 90 }} />
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.fullButton}
        >
          <Text style={styles.fullButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.lightGray,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: colors.white,
    elevation: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  fullButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: fonts.text,
  },

  // item box
  itemContainer: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: 10,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: fonts.text,
  },
  // category
  itemCategory: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 10,
    // borderColor: colors.lightGray,
    // borderWidth: 1,
    // borderBottomWidth: 1,
  },
  itemCategoryText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: fonts.text,
  },
});

export default Filter;
