import {colors} from '@/constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
