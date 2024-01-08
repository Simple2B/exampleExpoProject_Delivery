import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {colors} from '@/constants/colors';
import fonts from '@/assets/fonts';

interface IOr {}

const Or: React.FC<IOr> = ({}) => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.line} />
      <Text style={styles.lineText}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 28,
  },
  line: {
    width: '45%',
    height: 0.5,
    backgroundColor: colors.gray,
  },
  lineText: {
    fontFamily: fonts.text,
    fontSize: 19,
    color: colors.gray,
    marginHorizontal: 10,
  },
});

export default Or;
