import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import api from '../../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Alert } from 'react-native';

import {
    Container,
    Icon,
    Name,
    Title,
    Footer,
    ButtonForgot,
    Forgot
}from './styled-components';

export default function LoginEstablishment({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


     authenticate = async () => {
         if(!username || !password){
             Alert.alert(
                 'Informações Inválidas',
                 'Os campos não podem ficar vazios!'
                 )
         } else {
            try {
                const response = await api.post('/sessions/establishments',{
                    username,
                    password
                });

                const token = response.data.token;
                await AsyncStorage.setItem('@geoService', token);

                console.log(token, "Token");

                navigation.navigate('MainPage');

            } catch (error) {
                Alert.alert(
                    'Informações Inválidas',
                    'Ops! Usuário ou senha estão incorretos!'
                    );
            }
         }
    }
    return(
        <Container>
            <Icon>
                <AntDesign name='arrowleft' size={20} onPress={() => navigation.navigate('Signin')}/>
            </Icon>

            <Name>
                <Title>GeoService</Title>
            </Name>
                <Input name='username' value={username} onChangeText={setUsername} icon='user' placeholder='Usuario' autoCapitalize='none'/>
                <Input name='password' value={password} onChangeText={setPassword} icon='lock' placeholder='Senha' secureTextEntry={true}/>

                <Button onPress={authenticate}> Entrar </Button>
                <Footer>
                    <ButtonForgot>
                        <Forgot onPress={() => navigation.navigate('ForgotPassword')}> Esqueci minha senha </Forgot>
                    </ButtonForgot>
                </Footer>
        </Container>
    );
}