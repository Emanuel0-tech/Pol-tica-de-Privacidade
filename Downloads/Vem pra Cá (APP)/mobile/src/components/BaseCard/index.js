import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

const BaseCard = ({ imageSrc, title, description, style }) => {
  return (
    <TouchableOpacity style={[styles.card, style]}>
      <Image source={{ uri: imageSrc }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 20,
  },
  cardContent: {
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 18,
    color: '#9B59B6',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default BaseCard;
