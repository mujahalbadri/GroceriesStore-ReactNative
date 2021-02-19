import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text} from 'react-native';
import {AuthBackground, IcCarrotOn} from '../../assets';
import {Button, Gap, TextInput} from '../../components';
import {fonts} from '../../utils';

const SignIn = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={AuthBackground} style={styles.page}>
        <IcCarrotOn style={styles.icon} />
        <Gap height={100} />
        <Text style={styles.title}>Login</Text>
        <Gap height={15} />
        <Text style={styles.subTitle}>Enter your emails and password</Text>
        <Gap height={40} />
        <TextInput label="Email" placeholder="Type your email address" />
        <Gap height={30} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry
        />
        <Gap height={30} />
        <Button text="Log In" />
        <Gap height={25} />
        <Text style={styles.bottomText}>
          Don’t have an account?{' '}
          <Text
            style={styles.bottomTextClick}
            onPress={() => navigation.navigate('SignUp')}>
            Signup
          </Text>
        </Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  scrollView: {flexGrow: 1},
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 70,
  },
  icon: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    color: '#181725',
    fontFamily: fonts.semibold,
  },
  subTitle: {
    fontSize: 15,
    color: '#7C7C7C',
    fontFamily: fonts.light,
  },
  bottomText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fonts.semibold,
    color: '#181725',
  },
  bottomTextClick: {
    color: '#53B175',
  },
});
