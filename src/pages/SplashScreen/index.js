import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <Logo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
