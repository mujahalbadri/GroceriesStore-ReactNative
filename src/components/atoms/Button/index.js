import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';

const Button = ({text, color = '#53B175', textColor = 'white', onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 24,
    borderRadius: 19,
  }),
  text: (textColor) => ({
    fontSize: 18,
    fontFamily: fonts.semibold,
    color: textColor,
    textAlign: 'center',
  }),
});
