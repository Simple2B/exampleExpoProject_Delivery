import React, {useEffect} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import images from '@/assets/images';
import {styles} from './GoogleAppleLogin.styles';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeys} from '@/constants/storage';

const GoogleLogin = () => {
  const [userInfo, setUserInfo] = React.useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '1000274289123-3lj5ojsqa3b0j9pjadl0cdgdtmhmb2ss.apps.googleusercontent.com',
    iosClientId:
      '1000274289123-1nhairjivuhuv5ig30t1nk5tqribf9qq.apps.googleusercontent.com',
    webClientId:
      '1000274289123-p5b1sjcbpi41s0kvnl01njumaf604sp5.apps.googleusercontent.com',
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem(StorageKeys.USER);

    if (!user) {
      if (response?.type === 'success') {
        await getUserInfo(response?.params?.access_token);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;

    try {
      const response = await fetch(
        // `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`,
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: {Authorization: `Bearer ${token}`},
        },
      );
      const userInfoResponse = await response.json();
      await AsyncStorage.setItem(
        StorageKeys.USER,
        JSON.stringify(userInfoResponse),
      );
      setUserInfo(userInfoResponse);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
      <Image source={images.googleIcon} style={styles.iconBtnGoogle} />
      <Text>{JSON.stringify(userInfo)}</Text>
    </TouchableOpacity>
  );
};

export default GoogleLogin;
