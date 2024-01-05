import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import {styles} from './Login.styles';
import useLogin from './useLogin.hooks';
import {Link} from 'expo-router';
import {PathNames} from '@/constants/screens/screens';

interface ILogin {}

const Login: React.FC<ILogin> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    onSubmit,
  } = useLogin();

  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>
          S<Text style={styles.subText}>imple</Text>D
          <Text style={styles.subText}>elivery</Text>
        </Text>
      </View>

      <View style={styles.loginForm}>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="password"
        />
        <Link
          href={PathNames.forgotPassword}
          asChild
          style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={styles.text}>Forgot Password?</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.triangleCorner}></View> */}
    </View>
  );
};

export default Login;
