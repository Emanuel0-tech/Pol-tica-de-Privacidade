import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput';
import styles from './styles';

const LoginScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
        console.log('Pesquisa:', query);
    };

    return (
        <ImageBackground source={require('../../assets/images/bg/image.png')}
            style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <View style={styles.InputContainer}>
                <BaseInput
                    placeholder="E-Mail"
                    onChange={(text) => console.log(text)}
                    style={styles.input}
                />
                <BaseInput
                    placeholder="Senha"
                    onChange={(text) => console.log(text)}
                    style={styles.input}
                />

            </View>

            <TouchableOpacity style={styles.ForgotPasswordButtom}>
                <Text>Esqueceu a Senha?</Text>
            </TouchableOpacity>

            <View style={styles.ButtonContainer}>
                <BaseButton onClick={() => alert('Botão Clicado!')}>Entrar</BaseButton>
                <BaseButton onClick={() => alert('Botão Clicado!')}>Cadastre-se</BaseButton>
            </View>
            <View style={styles.LoginOptions}>
                <Text style={styles.LoginText}>Ou acesse com</Text>
            </View>
            <View style={styles.GoogleContainer}>
                <Image style={styles.GoogleIcon} source={require('../../assets/images/icons/google.png')} />
            </View>

        </ImageBackground>
    );
};

export default LoginScreen;
