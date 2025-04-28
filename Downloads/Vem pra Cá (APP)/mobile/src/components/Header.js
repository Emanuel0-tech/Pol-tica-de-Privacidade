import { Text, View } from 'react-native';
import COLORS from '../constants/colors';
import FONTS from '../constants/fonts';

const Header = () => (
  <View style={{ backgroundColor: COLORS.primaryPurple, padding: 16 }}>
    <Text style={{ ...FONTS.title, color: COLORS.white, textAlign: 'center' }}>
      Pontos Turísticos
    </Text>
  </View>
);

export default Header;
