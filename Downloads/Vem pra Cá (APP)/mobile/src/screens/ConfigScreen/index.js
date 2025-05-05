import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConfigScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ConfigScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
})

export default ConfigScreen;