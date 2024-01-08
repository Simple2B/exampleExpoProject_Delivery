import {StyleSheet, View, ScrollView, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import {colors} from '@/constants/colors';
import Login from '@/components/Login/Login';
import AppleLogin from '@/components/GoogleAppleLogin/AppleLogin';
import GoogleLogin from '@/components/GoogleAppleLogin/GoogleLogin';
import Or from '@/components/common/Or';

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    BalooBhai2: require('../assets/fonts/BalooBhai2-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Login />
        <Or />
        <View style={styles.socialNetworksContainer}>
          <GoogleLogin />
          <AppleLogin />
        </View>
        <View></View>
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
});

export default Welcome;
