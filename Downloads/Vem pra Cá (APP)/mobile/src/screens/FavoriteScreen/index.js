import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FavoriteScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
  },
})

export default FavoriteScreen;