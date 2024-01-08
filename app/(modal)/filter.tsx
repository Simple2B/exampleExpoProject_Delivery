import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { colors } from "@/constants/colors";
import fonts from "@/assets/fonts";
import { categories } from "@/assets/data/filters";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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

  const [items, setItems] = useState<ICategory[]>(categories);
  const [selectedItems, setSelectedItems] = useState<ICategory[]>([]);
  const flexWidth = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selectedItems.length > 0;
    const selected = items.filter((item) => item.checked);
    const newSelected = selected.length > 0;
    if (hasSelected !== newSelected) {
      flexWidth.value = withTiming(newSelected ? 150 : 0);
      scale.value = withTiming(newSelected ? 1 : 0);
    }
    setSelectedItems(selected);
  }, [items]);

  const handleClearAll = () => {
    const updatedItems = items.map((item) => {
      return { ...item, checked: false };
    });
    setItems(updatedItems);
  };

  const addCategories = (index: number) => {
    const isChecked = items[index].checked;
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !isChecked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: flexWidth.value,
      opacity: flexWidth.value > 0 ? 1 : 0,
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const renderItemCategory: ListRenderItem<ICategory> = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.itemCategory}
        onPress={() => addCategories(index)}
      >
        <Text style={styles.itemCategoryText}>
          {item.name} ({item.count})
        </Text>
        <BouncyCheckbox
          size={25}
          fillColor={colors.secondary}
          disableBuiltInState
          unfillColor={colors.white}
          text=""
          iconStyle={{ borderColor: colors.secondary, borderRadius: 4 }}
          innerIconStyle={{
            borderWidth: 2,
            borderColor: colors.secondary,
            borderRadius: 4,
          }}
          // textStyle={{ fontFamily: "JosefinSans-Regular" }}
          onPress={() => addCategories(index)}
          isChecked={items[index].checked}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItemCategory}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={{ height: 90 }} />
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <Animated.View style={[animatedStyles, styles.outlineButton]}>
            <TouchableOpacity onPress={handleClearAll}>
              <Animated.Text style={[animatedText, styles.outlineButtonText]}>
                Clear all
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.fullButton}
          >
            <Text style={styles.fullButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
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
  btnContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    marginTop: 13,
  },
  outlineButton: {
    borderColor: colors.secondary,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    marginHorizontal: 10,
  },
  outlineButtonText: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: fonts.text,
  },
  fullButton: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 10,
    marginLeft: 0,
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
