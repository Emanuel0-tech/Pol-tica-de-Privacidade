import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UserScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
})

export default UserScreen;