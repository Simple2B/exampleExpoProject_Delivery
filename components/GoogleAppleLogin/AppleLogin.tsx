import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import images from '@/assets/images';
import {styles} from './GoogleAppleLogin.styles';

const AppleLogin = () => {
  const handlePress = () => {};

  return (
    <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
      <Image source={images.appleIcon} style={styles.iconBtnApple} />
    </TouchableOpacity>
  );
};

export default AppleLogin;
