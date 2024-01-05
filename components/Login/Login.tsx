import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {styles} from './Login.styles';
import {Link} from 'expo-router';
import {PathNames} from '@/constants/screens/screens';
import {patterns} from '@/constants/patterns';
import Logo from './Logo';
import IconBtn from '../common/IconBtn';
import {colors} from '@/constants/colors';
import {names} from '@/constants/icons';

interface ILogin {}

const Login: React.FC<ILogin> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('[onSubmit] data', data);
    reset();
  };

  const handlePressSignUp = () => {
    console.log('handlePressSignUp');
  };

  return (
    <View style={styles.loginContainer}>
      <Logo />
      <View style={styles.loginForm}>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 100,
            pattern: patterns.email,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
              {errors.email?.type === 'required' && (
                <Text style={styles.error}>This is required</Text>
              )}
              {errors.email?.type === 'pattern' && (
                <Text style={styles.error}>
                  Email format should be example@mail.com
                </Text>
              )}
            </View>
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
              {errors.password?.type === 'required' && (
                <Text style={styles.error}>This is required</Text>
              )}
              {errors.password?.type === 'minLength' && (
                <Text style={styles.error}>
                  Minimum number of characters is 8
                </Text>
              )}
            </View>
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
        <View style={styles.btnsContainer}>
          <IconBtn
            onPress={handlePressSignUp}
            color={colors.white}
            name={names.arrowDown}
            size={20}
            wrapperStyle={styles.iconBtn}
          />
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
