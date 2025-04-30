// components/Input.js

import React, {useState} from 'react';
import { TextInput, View, Text } from 'react-native';
import { COLORS } from '../constants'; // Importando as cores

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <TextInput
        style={{
          height: 50,
          width: 350,
          borderColor: COLORS.primaryPurple,
          borderWidth: 1,
          borderRadius: 10,
          paddingLeft: 16,
          color: COLORS.black,
          backgroundColor: COLORS.white,
          fontSize: 16,
        }}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightGray}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
