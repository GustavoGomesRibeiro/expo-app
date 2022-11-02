import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { ReceiveScreen } from '../../../utils/NavigationRoutes';
import { ContextApi } from '../../../hooks/authContext';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

import { Container, ContainerInput, Text } from './styled';

export default function Signin() {
    const [ username, setUsername] = useState();
    const [ password, setPassword] = useState();

    const { authenticationUser, authenticationEstablishment } = useContext(ContextApi);
    const navigation = useNavigation<ReceiveScreen>()
    const route = useRoute();
    

    const handleLogin = () => {
        if(route.params?.session === 'user') {
            authenticationUser({
                username: username,
                password: password
            })
            navigation.navigate('Home');
        } else {
            authenticationEstablishment({
                username: username,
                password: password
            })
            navigation.navigate('Home');
        }

    }

    const routeNavigation = () => {
        if(route.params?.session === 'user') {
            navigation.navigate('SessionUser');
        } else {
            navigation.navigate('SessionEstablishment');
        }
    }

    return (
        <Container>
            <Header icon="arrow-left" onPress={routeNavigation}/>
            <KeyboardAvoidingView behavior="position">
                <ContainerInput>
                    <Text> Main screen to Sigin</Text>
                    <Input placeholder="Username" value={username} onChangeText={setUsername} placeholderTextColor="white" icon="user"/>
                    <Input placeholder="Password" value={password} onChangeText={setPassword} placeholderTextColor="white" icon="lock" secureTextEntry={true}/>
                    <Button onPress={handleLogin}> Entrar </Button>
                </ContainerInput>
            </KeyboardAvoidingView>
        </Container>
    )
}