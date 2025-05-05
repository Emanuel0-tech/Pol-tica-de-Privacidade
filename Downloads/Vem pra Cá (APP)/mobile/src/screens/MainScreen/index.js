import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CustomTabBar from '../../components/CustomTabBar';
import Carousel from '../../components/Carousel';
import PlaceCard from '../../components/PlaceCard';
import SearchBar from '../../components/SearchBar';
import { COLORS, FONTS, SIZES } from '../../constants/index';
import { supabase } from '../../services/supabase';

const MainScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    useEffect(() => {
        fetchPlaces();
    }, []);

    const fetchPlaces = async () => {
        const { data, error } = await supabase
            .from('pontos_turisticos')
            .select(`
        id,
        nome,
        imagens_urls,
        cidade:cidade_id (
          id,
          nome
        )
      `);

        if (error) {
            console.error('Erro ao buscar dados:', error);
        } else {
            setPlaces(data);
            setFilteredPlaces(data);
        }
    };

    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = places.filter((place) =>
            place.nome.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredPlaces(filtered);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Carousel
                    imageUri="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                    description="Praça Central da Cidade"
                />
            </View>

            <ScrollView>
                <View style={styles.main}>
                    <SearchBar
                        placeholder="Buscar ponto turístico..."
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                    {filteredPlaces.map((place) => (
                        <PlaceCard
                            key={place.id}
                            nome={place.nome}
                            location={place.cidade?.nome || 'Local desconhecido'}
                            imageUrl={place.imagens_urls}
                        />
                    ))}
                </View>

            </ScrollView>
            <View style={styles.footer}>
                <CustomTabBar navigation={navigation} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: SIZES.small,
    },
    main: {
        paddingHorizontal: 16,
    },
    footer: {
        marginTop: 24,
    },
});

export default MainScreen;
