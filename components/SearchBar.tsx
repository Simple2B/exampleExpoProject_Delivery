import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

interface ISearchBar {}

const SearchBar: React.FC<ISearchBar> = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            name="search-outline"
            size={20}
            color={colors.darkgray}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Restaurants, groceries, dishes"
            placeholderTextColor={colors.darkgray}
            style={styles.input}
          />
        </View>
        <Link href="/(modal)/filter" asChild>
          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons
              name="options-outline"
              size={20}
              color={colors.lightGray}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    backgroundColor: colors.lightGray,
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchField: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.lightCoral,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    color: colors.darkgray,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  optionBtn: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.lightCoral,
  },
});

export default SearchBar;
