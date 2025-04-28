import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import { COLORS, FONTS, SIZES } from '../../constants/index';

const HomeScreen = () => {
    return (
        <BackgroundWrapper>
            <View style={styles.container}>
                <Text style={{ fontSize: SIZES.h2, color: COLORS.black }}>Login</Text>
            </View>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
    },
});

export default HomeScreen;
