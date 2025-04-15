import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BaseButton = ({ onClick, children, style }) => {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#9B59B6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BaseButton;
