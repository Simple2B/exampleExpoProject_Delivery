import React from 'react';
import {View} from 'react-native';
import {styles} from './Login.styles';
import Logo from './Logo';
import LoginForm from './LoginForm';

interface ILogin {}

const Login: React.FC<ILogin> = () => {
  return (
    <View style={styles.loginContainer}>
      <Logo />
      <LoginForm />
    </View>
  );
};

export default Login;
