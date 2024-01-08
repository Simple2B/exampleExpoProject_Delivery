import {
  TouchableOpacity,
  ListRenderItem,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useNavigation } from "expo-router";
import {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { colors } from "@/constants/colors";
import { restaurant } from "@/assets/data/restaurants";

import IconBtn from "@/components/common/IconBtn";
import { names } from "@/constants/icons";
import HeaderRight from "./components/HeaderRight/HeaderRight";
import RenderItem from "./components/RenderItem/RenderItem";
import { changeOpacity, offsetScrolling } from "./details.services";

const OPTIONALS = {
  headerTransparent: true,
  headerTitle: "",
  headerTintColor: colors.white,
};

const useDetailsHooks = () => {
  const navigation = useNavigation();
  const sectionListData = restaurant.food.map((food) => ({
    title: food.category,
    data: food.meals,
  }));

  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<TouchableOpacity[]>([]);

  const [activeSegment, setActiveSegment] = useState(0);

  const selectCategory = (index: number) => {
    offsetScrolling(index, itemsRef, scrollRef);
    setActiveSegment(index);
  };

  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const handlePressGoBack = () => {
    navigation.goBack();
  };

  const handleOnPressShare = () => {
    console.log("Share");
  };

  const handleOnPressSearch = () => {
    console.log("Search");
  };

  const headerRight = () => {
    return (
      <HeaderRight
        handleOnPressShare={handleOnPressShare}
        handleOnPressSearch={handleOnPressSearch}
      />
    );
  };

  const headerLeft = () => {
    return (
      <IconBtn
        onPress={handlePressGoBack}
        color={colors.secondary}
        name={names.arrowBack}
        size={24}
      />
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      ...OPTIONALS,
      headerLeft,
      headerRight,
    });
  }, []);

  const onScroll = (event: any) => {
    changeOpacity(event, opacity);
  };

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return <RenderItem item={item} index={index} />;
  };

  return {
    sectionListData,
    scrollRef,
    itemsRef,
    activeSegment,
    selectCategory,
    onScroll,
    renderItem,
    opacity,
    animatedStyles,
  } as const;
};

export default useDetailsHooks;
