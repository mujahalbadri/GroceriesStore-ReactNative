import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthBackground, IcBack, Map} from '../../assets';
import {Button, Gap, Select, TextInput} from '../../components';
import {fonts} from '../../utils';

const SignUpLocation = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={AuthBackground} style={styles.page}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('SignUp')}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
        <Gap height={25} />
        <Map style={styles.ilustration} />
        <Gap height={30} />
        <View>
          <Text style={styles.title}>Select Your Location</Text>
          <Text style={styles.subTitle}>
            Switch on your location to stay in tune with{'\n'}what’s happening
            in your area
          </Text>
        </View>
        <Gap height={60} />
        <Select label="Your Zone" />
        {/* <TextInput label="Your Zone" placeholder="Banasree" /> */}
        <Gap height={30} />
        <TextInput label="Your Area" placeholder="Types of your area" />
        <Gap height={40} />
        <Button
          text="Submit"
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]})
          }
        />
      </ImageBackground>
    </ScrollView>
  );
};

export default SignUpLocation;

const styles = StyleSheet.create({
  scrollView: {flexGrow: 1},
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 70,
  },
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
  ilustration: {
    alignSelf: 'center',
  },
  textContainer: {
    textAlign: 'center',
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
