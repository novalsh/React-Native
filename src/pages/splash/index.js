import React, {useEffect} from 'react';
import {ImageBackground, Image, StyleSheet, Text, View} from 'react-native';
import {Logo, Background} from '../../assets';

const splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={Background} style={styles.background}>
      <Image source={Logo} style={styles.logo}></Image>
    </ImageBackground>
  );
};

export default splash;

const styles = StyleSheet.create({
  background: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
