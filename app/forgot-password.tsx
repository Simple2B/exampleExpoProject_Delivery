import {Text, StyleSheet, View} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '@/constants/colors';
import fonts from '@/assets/fonts';

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Forgot Password</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.lightGray,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontFamily: fonts.text,
    fontSize: 20,
  },
});

export default ForgotPassword;
