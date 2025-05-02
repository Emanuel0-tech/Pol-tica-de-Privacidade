import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import CustomTabBar from '../../components/CustomTabBar';
import Carousel from '../../components/Carousel';
import PlaceCard from '../../components/PlaceCard';
import SearchBar from '../../components/SearchBar';
import { COLORS, FONTS, SIZES } from '../../constants/index';

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Carousel
                        imageUri="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                        description="Praça Central da Cidade"
                    />
                </View>
                <View style={styles.main}>
                    <SearchBar placeholder="Buscar ponto turístico..." />
                    <PlaceCard name="Cristo Redentor" location="Rio de Janeiro, RJ" />
                    <PlaceCard name="Cristo Redentor" location="Rio de Janeiro, RJ" />
                    <PlaceCard name="Cristo Redentor" location="Rio de Janeiro, RJ" />
                    <PlaceCard name="Cristo Redentor" location="Rio de Janeiro, RJ" />
                </View>
                <View style={styles.footer}>
                    <CustomTabBar navigation={navigation} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    header: {
        marginTop: SIZES.small
    },
    main: {

    },
    footer: {
        justifyContent: 'center', flex: 1
    }
})

export default MainScreen;