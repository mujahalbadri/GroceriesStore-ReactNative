import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AuthBackground, Checklist} from '../../assets';
import {Button, Gap} from '../../components';
import {fonts} from '../../utils';

const SuccessSignUp = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={AuthBackground} style={styles.page}>
        <Checklist style={styles.ilustration} />
        <Gap height={60} />
        <View>
          <Text style={styles.title}>
            Your Account has been{'\n'}registered
          </Text>
          <Text style={styles.subTitle}>
            Now you are able to order{'\n'}some products as a self-reward
          </Text>
        </View>
        <Gap height={80} />
        <Button text="Find Order" />
      </ImageBackground>
    </ScrollView>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  scrollView: {flexGrow: 1},
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 70,
  },
  ilustration: {
    marginTop: 90,
    marginLeft: -20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: fonts.semibold,
    textAlign: 'center',
    color: '#181725',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.light,
    textAlign: 'center',
    color: '#7C7C7C',
  },
});
