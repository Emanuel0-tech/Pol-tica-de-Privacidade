import { View, Text, Image } from 'react-native';
import COLORS from '../constants/colors';
import FONTS from '../constants/fonts';

const PlaceCard = ({ name, location }) => (
  <View style={{
    flexDirection: 'row',
    backgroundColor: COLORS.primaryPurple,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center'
  }}>
    <View style={{
      width: 80, height: 80, backgroundColor: COLORS.lightGray,
      borderRadius: 8, justifyContent: 'center', alignItems: 'center'
    }}>
      <Image 
        source={require('../assets/user-add-icon.png')} 
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 16 }}>
      <Text style={{ ...FONTS.mediumText, color: COLORS.white }}>{name}</Text>
      <Text style={{ ...FONTS.smallText, color: COLORS.white }}>{location}</Text>
    </View>
  </View>
);

export default PlaceCard;
