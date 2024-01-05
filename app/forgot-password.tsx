import {Text, StyleSheet} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '@/constants/colors';

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Forgot Password</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
  },
});

export default ForgotPassword;
