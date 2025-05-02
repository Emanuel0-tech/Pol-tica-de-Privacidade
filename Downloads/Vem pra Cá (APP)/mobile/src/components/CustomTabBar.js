import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const CustomTabBar = ({ navigation }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 20,
            backgroundColor: '#9B59B6',
        }}>
            <TouchableOpacity onPressIn={navigation.navigate('Main')}>
                <Text style={{ color: 'white' }}>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPressIn={navigation.navigate('Main')}>
                <Text tyle={{ color: 'white' }}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPressIn={navigation.navigate('Main')}>
                <Text style={{ color: 'white' }}>Configurações</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomTabBar;