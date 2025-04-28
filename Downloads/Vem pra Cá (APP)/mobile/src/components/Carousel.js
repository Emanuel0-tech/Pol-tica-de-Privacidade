import { View, Image, Text } from 'react-native';
import COLORS from '../constants/colors';
import FONTS from '../constants/fonts';

const Carousel = ({ imageUri, description }) => (
  <View style={{ margin: 16 }}>
    <Image 
      source={{ uri: imageUri }}
      style={{ width: '100%', height: 200, borderRadius: 8 }}
      resizeMode="cover"
    />
    <View style={{
      position: 'absolute', bottom: 16, left: 16, right: 16, 
      backgroundColor: COLORS.primaryPurple, padding: 8, borderRadius: 8,
      opacity: 0.8
    }}>
      <Text style={{ color: COLORS.white, fontWeight: 'bold', textAlign: 'center' }}>
        {description}
      </Text>
    </View>
  </View>
);

export default Carousel;
