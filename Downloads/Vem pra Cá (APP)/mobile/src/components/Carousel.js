import { View, Image, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const Carousel = ({ imageUri, description }) => {
  if (!imageUri) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Imagem não disponível</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: COLORS.primaryPurple,
    padding: 8,
    borderRadius: 8,
    opacity: 0.8,
  },
  descriptionText: {
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: FONTS.medium, // Exemplo, se você usar FONTS
  },
  errorText: {
    color: COLORS.black,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Carousel;
