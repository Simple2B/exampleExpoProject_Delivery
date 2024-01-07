import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import images from '@/assets/images';
import {styles} from './GoogleAppleLogin.styles';

const GoogleLogin = () => {
  const handlePress = () => {};

  return (
    <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
      <Image source={images.googleIcon} style={styles.iconBtnGoogle} />
    </TouchableOpacity>
  );
};

export default GoogleLogin;
