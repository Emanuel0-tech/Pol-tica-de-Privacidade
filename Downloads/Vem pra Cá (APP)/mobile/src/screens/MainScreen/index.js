import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import CustomTabBar from "../../components/CustomTabBar";
import Carousel from "../../components/Carousel";
import PlaceCard from "../../components/PlaceCard";
import SearchBar from "../../components/SearchBar";
import { COLORS, FONTS, SIZES } from "../../constants";
import { supabase } from "../../services/supabase";

const MainScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const extractCategories = (placesList) => {
    const uniqueCategories = [...new Set(placesList.map((p) => p.categoria))];
    setCategories(uniqueCategories);
  };

  const fetchPlaces = async () => {
    const { data, error } = await supabase
      .from("pontos_turisticos")
      .select(`
        id,
        nome,
        categoria,
        descricao,
        imagens_urls,
        cidade:cidade_id (
          id,
          nome
        )
      `);

    if (error) {
      console.error("Erro ao buscar dados:", error);
    } else {
      setPlaces(data);
      setFilteredPlaces(data);
      extractCategories(data);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = places.filter((place) =>
      place.nome.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPlaces(filtered);
  };

  const handleCategorySelect = (categoria) => {
    const filtered = places.filter((place) => place.categoria === categoria);
    setFilteredPlaces(filtered);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Carousel
          imageUri="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          description="Praça Central da Cidade"
        />
      </View>

      {/* Modal de categorias */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              marginHorizontal: 40,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Text style={{ ...FONTS.mediumText, marginBottom: 10 }}>
              Selecione uma categoria:
            </Text>

            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => handleCategorySelect(cat)}
              >
                <Text style={{ paddingVertical: 8 }}>{cat}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              onPress={() => {
                setFilteredPlaces(places);
                setIsModalVisible(false);
              }}
            >
              <Text style={{ paddingVertical: 8, fontWeight: "bold" }}>
                Ver todos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <View style={styles.main}>
          <SearchBar
            placeholder="Buscar ponto turístico..."
            value={searchText}
            onChangeText={handleSearch}
            onOptionsPress={() => setIsModalVisible(true)}
          />
          {filteredPlaces.map((place) => (
            <PlaceCard
            key={place.id}
            nome={place.nome}
            descricao={place.descricao}
            categoria={place.categoria}
            location={place.cidade?.nome || "Local desconhecido"}
            imagemUrl={place.imagens_urls}  // Aqui estamos passando a URL da imagem
            onPress={() => navigation.navigate("Detail", { place })}
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
      padding: 5
   
  },
  footer: {
    marginTop: 24,
  },
});

export default MainScreen;
