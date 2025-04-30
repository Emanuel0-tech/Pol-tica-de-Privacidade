// components/Button.js

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../constants'; // Importando as cores

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 100,
        backgroundColor: COLORS.primaryPurple,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, fontSize: 14,  fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
