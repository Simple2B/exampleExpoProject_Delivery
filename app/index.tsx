import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import {colors} from '@/constants/colors';
import Login from '@/components/Login/Login';
import images from '@/assets/images';

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    BalooBhai2: require('../assets/fonts/BalooBhai2-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const handlePress = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Login />
        <View style={styles.socialNetworksContainer}>
          <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
            <Image source={images.googleIcon} style={styles.iconBtnGoogle} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
            <Image source={images.appleIcon} style={styles.iconBtnApple} />
          </TouchableOpacity>
        </View>
        <View></View>
        <View style={styles.signUpContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.lightGray,
  },
  scrollView: {flexGrow: 1},
  socialNetworksContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  signUpContainer: {},
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 4,
      height: -8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  iconBtnGoogle: {
    width: 25,
    height: 25,
  },
  iconBtnApple: {
    width: 40,
    height: 40,
  },
});

export default Welcome;
