import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { supabase } from '../../services/supabase';
import PlaceCard from '../../components/PlaceCard'; // Supondo que já tenha esse componente

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const user = supabase.auth.user(); // Pega o usuário autenticado

    if (user) {
      const { data, error } = await supabase
        .from('favoritos')
        .select(`
          ponto_turistico_id,
          pontos_turisticos (
            id,
            nome,
            categoria,
            cidade:cidade_id (
              id,
              nome
            ),
            imagens_urls
          )
        `)
        .eq('usuario_id', user.id); // Busca favoritos para o usuário logado

      if (error) {
        console.error('Erro ao buscar favoritos:', error);
      } else {
        setFavorites(data);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Favoritos</Text>
      <ScrollView>
        {favorites.map((favorite) => (
          <PlaceCard
            key={favorite.pontos_turisticos.id}
            nome={favorite.pontos_turisticos.nome}
            location={favorite.pontos_turisticos.cidade?.nome || 'Local desconhecido'}
            imageUrl={favorite.pontos_turisticos.imagens_urls}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default FavoritesScreen;
