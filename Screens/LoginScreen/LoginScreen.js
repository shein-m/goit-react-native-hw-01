import { useState } from 'react';
import { ImageBackground, View, Pressable, StyleSheet, Text, TextInput } from 'react-native';

const bgPath = require('../../src/images/bg.jpeg');

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePressButton = () => {};
  const handleSignUp = () => {};

  return (
    <View style={styles.loginWrapper}>
      <ImageBackground source={bgPath} style={styles.loginBG}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginHeader}>Увійти</Text>
          <View style={styles.loginForm}>
            <TextInput
              value={email}
              style={styles.loginFormInput}
              placeholder="Адреса електронної пошти"
              onChangeText={text => setEmail(text)}
            />
            <View style={styles.loginInputPasswordWrapper}>
              <TextInput
                value={password}
                secureTextEntry={showPassword}
                style={{ ...styles.loginFormInput, ...styles.loginFormInputLast }}
                placeholder="Пароль"
                onChangeText={text => setPassword(text)}
              />
              <Text onPress={handleShowPassword} style={styles.loginInputShowPass}>
                {showPassword ? 'Показати' : 'Сховати'}
              </Text>
            </View>

            <Pressable style={styles.loginFormButton} onPress={handlePressButton}>
              <Text style={styles.loginFormButtonText}>Увійти</Text>
            </Pressable>

            <Pressable onPress={handleSignUp}>
              <Text style={styles.loginFormToSignUp}>
                Немає акаунту? <Text style={styles.loginFormToSignUpUnder}>Зареєструватися</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
  },

  loginBG: {
    flex: 1,
    flexDirection: 'column-reverse',
  },

  loginContainer: {
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 111,
  },

  loginHeader: {
    marginBottom: 32,
    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.3,
  },

  loginFormInput: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
    fontSize: 16,
    marginBottom: 16,
  },

  loginFormInputLast: {
    marginBottom: 0,
  },

  loginInputPasswordWrapper: {
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 43,
  },

  loginInputShowPass: {
    position: 'absolute',
    right: 0,
    paddingRight: 16,

    color: '#1B4371',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },

  loginFormButton: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },

  loginFormButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },

  loginFormToSignUp: {
    color: '#1B4371',
    textAlign: 'center',
  },

  loginFormToSignUpUnder: {
    textDecorationLine: 'underline',
  },
});
