import { useColorScheme } from "react-native";
import {useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {ScreenName} from '@/constants/screens/screens';
import Constants from 'expo-constants';
import StackScreens from '@/navigation/StackScreens';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: ScreenName.index,
};
const storybookEnabled = Constants.expoConfig?.extra?.storybookEnabled;

// Prevent the splash screen from auto-hiding before asset loading is complete.
storybookEnabled !== 'true' && SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [loaded, error] = useFonts({
    BalooBhai2: require('../assets/fonts/BalooBhai2-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <BottomSheetModalProvider>
        <StackScreens />
      </BottomSheetModalProvider>
    </ThemeProvider>
  );
};

let EntryPoint = RootLayout;

if (storybookEnabled) {
  const StorybookUI = require('../.storybook').default;
  EntryPoint = () => <StorybookUI />;
}

export default EntryPoint;
