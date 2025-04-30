# 🌍 Vem pra Cá

Aplicativo mobile em desenvolvimento que permite aos usuários explorar pontos turísticos, visualizar sua localização em mapa e avaliar suas experiências. Utiliza Supabase como backend e React Native com Expo para o frontend.

---

## 📦 Tecnologias

**Frontend**
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Maps SDK for Android](https://developers.google.com/maps/documentation/android-sdk)

**Backend**
- [Supabase](https://supabase.com/) – Banco de dados, autenticação e API RESTful

---

## 🗂️ Estrutura do Banco de Dados (Supabase)

**usuarios**
- `id` (UUID, gerado pelo Supabase Auth)
- `nome`
- `email`

**cidades**
- `id` (UUID)
- `nome`

**pontos_turisticos**
- `id` (UUID)
- `nome`
- `descricao`
- `imagem_url`
- `latitude`
- `longitude`
- `cidade_id` (FK → cidades.id)

**avaliacoes**
- `id` (UUID)
- `usuario_id` (FK → usuarios.id)
- `ponto_turistico_id` (FK → pontos_turisticos.id)
- `nota` (1 a 5)
- `comentario`

---

## 📱 Funcionalidades

### ✅ Implementadas
- Listagem de pontos turísticos
- Tela de detalhes com:
  - Imagem e descrição
  - Mapa com marcador de localização
  - Lista de avaliações
  - Envio de nova avaliação com nota
- Integração com Supabase (busca e envio de dados)

### 🚧 Em Desenvolvimento
- Autenticação de usuários
- Cadastro de pontos turísticos
- Favoritar pontos turísticos
- Filtro por cidade

---

## 🖼️ Telas

### Home
- Exibe lista de pontos turísticos disponíveis
- Cada item possui botão para acessar detalhes

### Detalhes
- Exibe informações completas de um ponto turístico
- Inclui mapa, avaliações e campo para enviar uma nova

---
