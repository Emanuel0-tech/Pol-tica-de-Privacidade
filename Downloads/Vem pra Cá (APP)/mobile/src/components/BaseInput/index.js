import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const BaseInput = ({ value, onChange, placeholder, style }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    fontSize: 16,
  },
});

export default BaseInput;
