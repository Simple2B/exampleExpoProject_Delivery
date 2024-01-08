import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Login.styles';
import images from '@/assets/images';

interface ILogo {}

const Logo: React.FC<ILogo> = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={images.delivery} style={styles.imgLogo} />
      <Text style={styles.title}>
        S<Text style={styles.subText}>imple</Text>
      </Text>
      <Text style={styles.titleDelivery}>
        D<Text style={styles.subText}>elivery</Text>
      </Text>
    </View>
  );
};

export default Logo;
