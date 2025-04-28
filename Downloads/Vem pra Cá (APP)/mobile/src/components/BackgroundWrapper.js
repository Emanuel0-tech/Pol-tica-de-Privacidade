// components/BackgroundWrapper.js

import { ImageBackground } from 'react-native';

export default function BackgroundWrapper({ children }) {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}
