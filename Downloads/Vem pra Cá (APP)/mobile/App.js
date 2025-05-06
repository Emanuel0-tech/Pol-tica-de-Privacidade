import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainScreen from './src/screens/MainScreen';
import ConfigScreen from './src/screens/ConfigScreen';
import DetailScreen from './src/screens/DetailsScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import UserScreen from './src/screens/UserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={({ navigation }) => ({
            title: 'Criar Conta',
            headerStyle: { backgroundColor: '#9B59B6' },
            headerTintColor: '#FFF',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  if (navigation.canGoBack()) {
                    navigation.goBack();
                  } else {
                    navigation.navigate('Home');
                  }
                }}
              >
                <Ionicons name="arrow-back" size={24} color="#FFF" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Config"
          component={ConfigScreen}
          options={({ navigation }) => ({
            title: 'Configurações',
            headerStyle: { backgroundColor: '#9B59B6' },
            headerTintColor: '#FFF',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {       
                    navigation.navigate('Main');
                }}
              >
                <Ionicons name="arrow-back" size={24} color="#FFF" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ navigation }) => ({
            title: 'Sobre',
            headerStyle: { backgroundColor: '#9B59B6' },
            headerTintColor: '#FFF',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Main');
                }}
              >
                <Ionicons name="arrow-back" size={24} color="#FFF" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={({ navigation }) => ({
            title: 'Favoritos',
            headerStyle: { backgroundColor: '#9B59B6' },
            headerTintColor: '#FFF',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Main');
                }}
              >
                <Ionicons name="arrow-back" size={24} color="#FFF" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={({ navigation }) => ({
            title: 'Perfil',
            headerStyle: { backgroundColor: '#9B59B6' },
            headerTintColor: '#FFF',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Main');
                }}
              >
                <Ionicons name="arrow-back" size={24} color="#FFF" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
