import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {fonts} from '../../../utils';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={this.state.language}
        // onValueChange={(itemValue, itemIndex) =>
        //   this.setState({language: itemValue})
        // }
        >
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Semarang" value="Semarang" />
          <Picker.Item label="Yogyakarta" value="Yogyakarta" />
          <Picker.Item label="Surabaya" value="Surabaya" />
          <Picker.Item label="Makassar" value="Makassar" />
          <Picker.Item label="Banjarmasin" value="Banjarmasin" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    color: '#7C7C7C',
  },
  input: {
    fontSize: 18,
    fontFamily: fonts.semibold,
    color: '#181725',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
});
