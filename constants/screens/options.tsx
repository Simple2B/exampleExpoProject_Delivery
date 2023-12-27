import React from "react";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import CustomHeader from "@/components/CustomHeader";
import { colors } from "../colors";

const HEADER_STYLE = {
  backgroundColor: colors.lightGray,
};

//   options

const INDEX_STACK_OPTIONS: NativeStackNavigationOptions | undefined = {
  title: "Home",
  header: () => <CustomHeader />,
};

const FILTER_STACK_OPTIONS: NativeStackNavigationOptions | undefined = {
  presentation: "modal",
  headerTitle: "Filter",
  headerShadowVisible: false,
  headerStyle: HEADER_STYLE,
};

const LOCATION_SEARCH_STACK_OPTIONS: NativeStackNavigationOptions | undefined =
  {
    presentation: "fullScreenModal",
    headerTitle: "Search location",
    headerStyle: HEADER_STYLE,
  };

const DISH_STACK_OPTIONS: NativeStackNavigationOptions | undefined = {
  presentation: "modal",
  headerTitle: "",
  headerTransparent: true,
};

export {
  INDEX_STACK_OPTIONS,
  FILTER_STACK_OPTIONS,
  LOCATION_SEARCH_STACK_OPTIONS,
  DISH_STACK_OPTIONS,
};
