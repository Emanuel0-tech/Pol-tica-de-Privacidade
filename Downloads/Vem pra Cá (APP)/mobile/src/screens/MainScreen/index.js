import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import Carousel from '../../components/Carousel';
import { COLORS, FONTS, SIZES } from '../../constants/index';

const MainScreen = () => {
    return (
        <BackgroundWrapper>
            <View style={styles.container}>
                <ScrollView>
                    <Carousel
                        imageUri=""
                        description="Praça Central da Cidade"
                    />
                    <Carousel
                        imageUri=""
                        description="Museu de História Natural"
                    />
                </ScrollView>
            </View>
        </BackgroundWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
    },
})

export default MainScreen;