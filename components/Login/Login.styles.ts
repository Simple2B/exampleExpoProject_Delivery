import React from 'react';
import fonts from '@/assets/fonts';
import {colors} from '@/constants/colors';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  loginContainer: {
    margin: 15,
    marginTop: 30,
    backgroundColor: colors.white,
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 4,
      height: -8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 60,
    flexDirection: 'row',
  },
  imgLogo: {
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
  },
  title: {
    alignSelf: 'flex-end',
    fontFamily: fonts.title,
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.lightSeaGreen,
  },
  titleDelivery: {
    position: 'absolute',
    bottom: -4,
    left: 175,
    fontFamily: fonts.title,
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.lightSeaGreen,
  },
  subText: {
    fontFamily: fonts.subText,
    fontSize: 23,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.secondary,
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 17,
    fontWeight: '600',
    color: colors.gray,
  },
  loginForm: {
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    marginVertical: 14,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: colors.lightGray,
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.15,
  },
  error: {
    position: 'absolute',
    bottom: -10,
    left: 10,
    fontFamily: fonts.text,
    fontSize: 16,
    fontWeight: '600',
    color: colors.secondary,
  },
  errorPassword: {
    bottom: 18,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  btnLogin: {
    marginVertical: 25,
    paddingVertical: 5,
    paddingHorizontal: 55,
    borderRadius: 30,
    backgroundColor: colors.lightSeaGreen,
  },

  textLogin: {
    fontFamily: fonts.text,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.white,
  },
  registerContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  titleRegister: {
    fontFamily: fonts.title,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.gray,
  },
  textRegister: {
    color: colors.lightSalmon2,
  },
  // triangleCorner: {
  //   alignSelf: 'center',
  //   position: 'absolute',
  //   left: -10,
  //   bottom: -40,
  //   flex: 1,

  //   borderTopWidth: windowWidth - 90,
  //   borderTopColor: 'transparent',
  //   borderLeftWidth: windowWidth - 30,
  //   borderLeftColor: colors.lightGray,
  //   // opacity: 0.5,
  //   // borderBottomLeftRadius: 30,
  //   // borderBottomRightRadius: 30,

  //   elevation: 0,
  //   shadowColor: 'transparent',
  //   shadowOffset: {
  //     width: 0,
  //     height: 0,
  //   },
  //   shadowOpacity: 0,
  //   shadowRadius: 0,

  //   // width: 0,
  //   // height: 0,
  //   // backgroundColor: 'transparent',
  //   // borderStyle: 'solid',
  //   // borderRightWidth: windowWidth - 90,
  //   // borderTopWidth: windowWidth - 90,
  //   // borderRightColor: 'red',
  //   // borderTopColor: 'transparent',
  //   // transform: [{rotate: '90deg'}],
  // },
});
