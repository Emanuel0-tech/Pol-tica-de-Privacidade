import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Alert } from 'react-native';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import { supabase } from '../../services/supabase';
import Input from '../../components/input';
import Button from "../../components/button";
import { COLORS, FONTS, SIZES } from '../../constants/index';


const HomeScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleLoginButton = async () => {

        if (!email || !senha) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password: senha,
        });

        if (error) {
            Alert.alert('Erro no login', error.message)
        } else {
            console.log('Usuário logado', data.session)
            setEmail('');
            setSenha('');
            navigation.navigate('Main')
        }
    };
    const handleRegisterButton = () => {
        navigation.navigate('Register');
    };

    return (
        <BackgroundWrapper>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: SIZES.extraLarge, color: COLORS.black }}>Login</Text>
                </View>
                <View style={styles.main}>
                    <Text style={{ fontSize: SIZES.large, color: COLORS.black }}>E-mail</Text>
                    <Input
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={{ fontSize: SIZES.large, color: COLORS.black }}>Senha</Text>
                    <Input
                        placeholder="Digite sua senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />
                    <TouchableOpacity>
                        <Text style={{ fontSize: SIZES.small, margin: SIZES.margin, color: COLORS.black }}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 40 }}>
                        <Button title="Entrar" onPress={handleLoginButton} />
                        <Button title="Cadastre - se" onPress={handleRegisterButton} />
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{ fontSize: SIZES.large, margin: SIZES.margin, color: COLORS.black }}>Ou acesse com</Text>
                <Image
                    source={require('../../assets/icons/google.png')} // caminho da imagem local
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                />
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
    header: {
        paddingTop: '20%',
    },
    main: {
        paddingTop: '30%',
    },
    footer: {
        paddingTop: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HomeScreen;
