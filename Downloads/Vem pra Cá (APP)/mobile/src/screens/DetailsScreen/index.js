import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import { COLORS, FONTS } from "../../constants/index";
import { FontAwesome } from "@expo/vector-icons";
import { supabase } from "../../services/supabase";

const DetailsScreen = ({ route }) => {
  const { place } = route.params;
  const [user, setUser] = useState(null);
  const [commentExisting, setCommentExisting] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) setUser(data.user);
    });
  }, []);

  useEffect(() => {
    if (user) fetchComments();
  }, [user]);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("avaliacoes")
      .select(`id, comentario, nota, data_criacao, usuario_id, ponto_turistico_id`)
      .eq("ponto_turistico_id", place.id)
      .order("data_criacao", { ascending: false });

    if (error) {
      console.error("Erro ao buscar comentários:", error);
    } else {
      const myComment = data.find((c) => c.usuario_id === user?.id);
      setCommentExisting(myComment || null);
      setComments(data);
    }
  };

  const handleSendComment = async () => {
    if (!commentText.trim() || rating === 0 || !user) return;

    let error = null;

    if (commentExisting) {
      ({ error } = await supabase
        .from("avaliacoes")
        .update({ comentario: commentText, nota: rating })
        .eq("id", commentExisting.id));
    } else {
      ({ error } = await supabase.from("avaliacoes").insert([
        {
          ponto_turistico_id: place.id,
          comentario: commentText,
          nota: rating,
          usuario_id: user.id,
        },
      ]));
    }

    if (error) {
      console.error("Erro ao enviar comentário:", error);
    } else {
      Alert.alert("Sucesso", "Comentário enviado!");
      setCommentText("");
      setRating(0);
      fetchComments();
    }
  };


  const handleDeleteComment = () => {
    Alert.alert(
      "Apagar comentário",
      "Tem certeza que deseja apagar seu comentário?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Apagar",
          style: "destructive",
          onPress: async () => {
            const { error } = await supabase
              .from("avaliacoes")
              .delete()
              .eq("id", commentExisting.id);

            if (error) {
              console.error("Erro ao apagar comentário", error);
            } else {
              Alert.alert("Comentário apagado.");
              setCommentText("");
              setRating(0);
              fetchComments();
            }
          },
        },
      ]
    );
  };


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: place.imagens_urls }} style={styles.image} />
      <Text style={FONTS.largeTitle}>{place.nome}</Text>
      <Text style={styles.location}>
        📍 {place.cidade?.nome || "Desconhecido"}
      </Text>
      <Text style={styles.category}>Categoria: {place.categoria}</Text>
      <Text style={styles.description}>{place.descricao}</Text>

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <FontAwesome
              name={star <= rating ? "star" : "star-o"}
              size={28}
              color={COLORS.primaryPurple}
              style={{ marginHorizontal: 4 }}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={FONTS.mediumText}>Comentários</Text>
      {comments.length === 0 ? (
        <Text style={styles.noComments}>Nenhum comentário ainda.</Text>
      ) : (
        comments.map((comment) => (
          <View key={comment.id} style={styles.comment}>
            <Text style={styles.commentText}>{comment.comentario}</Text>
            <Text style={styles.commentMeta}>
              ⭐ {comment.nota} -{" "}
              {new Date(comment.data_criacao).toLocaleDateString()}
            </Text>
            {comment.usuario_id === user?.id && (
              <View style={{ flexDirection: "row", marginTop: 6, gap: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    setCommentText(comment.comentario);
                    setRating(comment.nota);
                  }}
                >
                  <Text style={{ color: COLORS.primaryPurple }}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDeleteComment}>
                  <Text style={{ color: "red" }}>Apagar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escreva um comentário..."
          value={commentText}
          onChangeText={setCommentText}
        />
        <TouchableOpacity onPress={handleSendComment} style={styles.button}>
          <Text style={{ color: COLORS.white }}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  location: {
    marginVertical: 6,
    color: COLORS.primaryPurple,
  },
  category: {
    marginBottom: 6,
    fontStyle: "italic",
  },
  description: {
    marginBottom: 20,
  },
  noComments: {
    color: "#999",
    fontStyle: "italic",
    marginBottom: 12,
  },
  comment: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  commentText: {
    marginBottom: 4,
  },
  commentMeta: {
    fontSize: 12,
    color: "#666",
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  button: {
    backgroundColor: COLORS.primaryPurple,
    padding: 10,
    borderRadius: 10,
  },
});

export default DetailsScreen;
