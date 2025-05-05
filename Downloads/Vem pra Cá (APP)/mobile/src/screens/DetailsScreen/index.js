import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
  },
})

export default DetailsScreen;