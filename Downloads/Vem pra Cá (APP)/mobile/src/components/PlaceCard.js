import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/index";

const PlaceCard = ({ nome, descricao, categoria, location, imagemUrl, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {/* Exibindo a imagem passada via prop */}
      <Image
        source={{ uri: imagemUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={FONTS.mediumText}>{nome}</Text>
        <Text style={styles.location}>{location}</Text>
        {descricao ? <Text numberOfLines={2}>{descricao}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    margin: 10,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    height: 150,
    width: "100%",
  },
  info: {
    padding: 10,
  },
  location: {
    fontSize: 12,
    color: COLORS.primaryPurple,
    marginVertical: 4,
  },
});

export default PlaceCard;
