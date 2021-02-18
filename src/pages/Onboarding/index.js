import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {IcCarrotOff, OnboardImage} from '../../assets';
import {Button, Gap} from '../../components';
import {fonts} from '../../utils';

const Onboarding = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={OnboardImage} style={styles.backgroundImage}>
        <View style={styles.content}>
          <IcCarrotOff />
          <Text style={styles.title}>Welcome{'\n'}to our store</Text>
          <Text style={styles.subTitle}>
            Ger your groceries in as fast as one hour
          </Text>
        </View>
        <Gap height={40} />
        <Button text={'Get Started'} />
      </ImageBackground>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: 414,
    height: 896,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    marginTop: 35,
    fontSize: 48,
    color: 'white',
    fontFamily: fonts.semibold,
    textAlign: 'center',
    lineHeight: 57,
  },
  subTitle: {
    marginTop: 19,
    fontSize: 16,
    color: 'white',
    fontFamily: fonts.light,
    textAlign: 'center',
  },
});
