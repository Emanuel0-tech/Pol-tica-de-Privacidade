import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import Input from '../../components/input'
import Button from "../../components/button";
import { COLORS, FONTS, SIZES } from '../../constants/index';
import { supabase } from '../../services/supabase';


const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');;


    const handleRegisterButton = async () => {
        if (!email || !senha || !confirmSenha) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        if (senha !== confirmSenha){
            Alert.alert('Erro', 'As senhas não coincidem!');
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password:senha,
        });

        if (error) {
            Alert.alert('Erro no cadastro', error.message);
        } else {
            Alert.alert('Sucesso', 'Cadastro realizado!');
            setEmail('');
            setSenha('');
            setConfirmSenha('');
            navigation.navigate('Main')
        }

    };

    return (
        <BackgroundWrapper>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: SIZES.extraLarge, color: COLORS.black }}>Cadastro
                    </Text>
                </View>
                <View style={styles.main}>
                    <Text style={{ fontSize: SIZES.large, color: COLORS.black }}>Nome</Text>
                    <Input
                        placeholder="Digite seu nome"
                        value={name}
                        onChangeText={setName}
                    />
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
                    <Text style={{ fontSize: SIZES.large, color: COLORS.black }}>Confirmar senha</Text>
                    <Input
                        placeholder="Digite sua senha"
                        value={confirmSenha}
                        onChangeText={setConfirmSenha}
                        secureTextEntry
                    />

                </View>
            </View>
            <View style={styles.footer}>
                <View style={{ justifyContent: 'center' }}>
                    <Button title="Criar Conta" onPress={handleRegisterButton} />
                </View>
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
        paddingTop: '25%',
    },
    footer: {
        paddingTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default RegisterScreen;
