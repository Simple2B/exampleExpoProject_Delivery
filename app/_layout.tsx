import { useColorScheme } from "react-native";
import { useEffect } from "react";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { colors } from "@/constants/colors";
import IconBtn from "@/components/common/IconBtn";
import { names } from "@/constants/icons";
import { ScreenName } from "@/constants/screens/screens";
import {
  DISH_STACK_OPTIONS,
  FILTER_STACK_OPTIONS,
  INDEX_STACK_OPTIONS,
  LOCATION_SEARCH_STACK_OPTIONS,
  WELCOME_STACK_OPTIONS,
} from "@/constants/screens/options";
import Constants from "expo-constants";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: ScreenName.index,
};
const storybookEnabled = Constants.expoConfig?.extra?.storybookEnabled;

// Prevent the splash screen from auto-hiding before asset loading is complete.
storybookEnabled !== "true" && SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/BalooBhai2-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const RootLayoutNav = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const handlePressGoBack = () => {
    navigation.goBack();
  };

  const headerLeft = () => {
    return (
      <IconBtn
        onPress={handlePressGoBack}
        color={colors.secondary}
        name={names.close}
        size={30}
      />
    );
  };
  const headerLeftDish = () => {
    return (
      <IconBtn
        onPress={handlePressGoBack}
        color={colors.secondary}
        name={names.close}
        size={25}
        wrapperStyle={{
          backgroundColor: colors.white,
          borderRadius: 20,
          padding: 6,
          paddingHorizontal: 7,
        }}
      />
    );
  };
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name={ScreenName.index} options={INDEX_STACK_OPTIONS}  />
          <Stack.Screen name={ScreenName.welcome} options={WELCOME_STACK_OPTIONS} />
          <Stack.Screen
            name={ScreenName.filter}
            options={{
              ...FILTER_STACK_OPTIONS,
              headerLeft,
            }}
          />
          <Stack.Screen
            name={ScreenName.locationSearch}
            options={{
              ...LOCATION_SEARCH_STACK_OPTIONS,
              headerLeft,
            }}
          />
          <Stack.Screen
            name={ScreenName.dish}
            options={{
              ...DISH_STACK_OPTIONS,
              headerLeft: headerLeftDish,
            }}
          />
        </Stack>
      </BottomSheetModalProvider>
    </ThemeProvider>
  );
};

let EntryPoint = RootLayout;

if (storybookEnabled) {
  const StorybookUI = require("../.storybook").default;
  EntryPoint = () => <StorybookUI />;
}

export default EntryPoint;