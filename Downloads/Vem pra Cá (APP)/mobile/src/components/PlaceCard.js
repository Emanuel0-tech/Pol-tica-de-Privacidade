import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { COLORS, FONTS, SIZES } from '../constants/index';

const PlaceCard = ({ nome, location, imageUrl }) => {
  const [favorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    setFavorited(!favorited);
  };

  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: COLORS.primaryPurple,
      borderRadius: 16,
      marginHorizontal: 16,
      marginBottom: 16,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{
          width: 80, height: 80, backgroundColor: COLORS.lightGray,
          borderRadius: 8, justifyContent: 'center', alignItems: 'center'
        }}>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 50, height: 50, borderRadius: 8 }}
            resizeMode="cover"
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ ...FONTS.medium, color: COLORS.white }}>{nome}</Text>
          <Text style={{ ...FONTS.small, color: COLORS.white }}>{location}</Text>
          <TouchableOpacity onPress={toggleFavorite}>
            <FontAwesome6
              name={favorited ? 'heart-circle-check' : 'heart-circle-plus'}
              size={24}
              color={favorited ? COLORS.redHeart : COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
};

export default PlaceCard;
