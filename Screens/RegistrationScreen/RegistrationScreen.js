import { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { svgSprite } from '../../src/images/svg/add';
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
const bgPath = require('../../src/images/bg.jpeg');

export const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePressButton = () => {};

  const handleAddProfilePhoto = () => {
    console.log('add');
  };

  const handleSignIn = () => {};

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={bgPath}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'flex-end' }}
      >
        <View style={styles.regContainer}>
          <View style={styles.regLogoWrapper}>
            <View style={styles.regLogo}>
              <SvgXml
                xml={svgSprite.add}
                onPress={handleAddProfilePhoto}
                style={styles.regLogoSVG}
              />
            </View>
          </View>

          <Text style={styles.regHeader}>Реєстрація</Text>
          <View style={styles.regForm}>
            <TextInput
              value={login}
              style={styles.regFormInput}
              placeholder="Логін"
              onChangeText={text => setLogin(text)}
            />
            <TextInput
              value={email}
              style={styles.regFormInput}
              placeholder="Адреса електронної пошти"
              onChangeText={text => setEmail(text)}
            />
            <View style={styles.regInputPasswordWrapper}>
              <TextInput
                value={password}
                secureTextEntry={showPassword}
                style={{ ...styles.regFormInput, ...styles.regFormInputLast }}
                placeholder="Пароль"
                onChangeText={text => setPassword(text)}
              />
              <Text onPress={handleShowPassword} style={styles.regInputShowPass}>
                {showPassword ? 'Показати' : 'Сховати'}
              </Text>
            </View>

            <Pressable style={styles.regFormButton} onPress={handlePressButton}>
              <Text style={styles.regFormButtonText}>Зареєстуватися</Text>
            </Pressable>

            <Pressable onPress={handleSignIn}>
              <Text style={styles.regFormToSignIn}>Вже є акаунт? Увійти</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },

  regContainer: {
    paddingTop: 92,
    paddingBottom: 45,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },

  regLogoWrapper: {
    alignItems: 'center',
  },

  regLogo: {
    width: 120,
    height: 120,
    marginTop: -152,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  regLogoSVG: {
    alignSelf: 'flex-end',
    marginRight: -15,
    marginBottom: 14,
  },

  regHeader: {
    marginBottom: 33,
    textAlign: 'center',
    color: '#212121',
    // add font
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.3,
  },

  regForm: {},

  regFormInput: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
    fontSize: 16,
    marginBottom: 16,
  },

  regFormInputLast: {
    marginBottom: 0,
  },

  regInputPasswordWrapper: {
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 43,
  },

  regInputShowPass: {
    position: 'absolute',
    right: 0,
    paddingRight: 16,

    color: '#1B4371',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },

  regFormButton: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },

  regFormButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },

  regFormToSignIn: {
    color: '#1B4371',
    textAlign: 'center',
  },
});
