import React from 'react';
import {StyleSheet, Text, TextInput as TextInputRN, View} from 'react-native';
import {fonts} from '../../../utils';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

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
