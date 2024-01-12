// Note: Stack Screens
import {Stack, useNavigation} from 'expo-router';
import {ScreenName} from '@/constants/screens/screens';
import {
  DISH_STACK_OPTIONS,
  FILTER_STACK_OPTIONS,
  INDEX_STACK_OPTIONS,
  LOCATION_SEARCH_STACK_OPTIONS,
  MODAL_SCREEN_STACK_OPTIONS,
  REGISTRATION_STACK_OPTIONS,
  WELCOME_STACK_OPTIONS,
} from '@/constants/screens/options';
import IconBtn from '@/components/common/IconBtn';
import {colors} from '@/constants/colors';
import {names} from '@/constants/icons';

const StackScreens = () => {
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
    <Stack>
      <Stack.Screen name={ScreenName.index} options={INDEX_STACK_OPTIONS} />
      <Stack.Screen
        name={ScreenName.registration}
        options={REGISTRATION_STACK_OPTIONS}
      />

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
      <Stack.Screen
        name={ScreenName.forgotPassword}
        options={{
          ...MODAL_SCREEN_STACK_OPTIONS,
          headerLeft,
        }}
      />
    </Stack>
  );
};

export default StackScreens;
