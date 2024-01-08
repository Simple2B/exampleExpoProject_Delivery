// web 1000274289123-p5b1sjcbpi41s0kvnl01njumaf604sp5.apps.googleusercontent.com
// ios 1000274289123-1nhairjivuhuv5ig30t1nk5tqribf9qq.apps.googleusercontent.com
// android 1000274289123-3lj5ojsqa3b0j9pjadl0cdgdtmhmb2ss.apps.googleusercontent.com

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
