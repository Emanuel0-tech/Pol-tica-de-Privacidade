// components/Button.js

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../constants'; // Importando as cores

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primaryPurple,
        paddingVertical: 12,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
