import React, { useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { ReceiveScreen } from '../../../utils/NavigationRoutes';
import { ContextApi } from '../../../hooks/authContext';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

import { Container, ContainerInput, Text } from './styled';

export default function Signin() {

    const { authenticationUser } = useContext(ContextApi);
    const navigation = useNavigation<ReceiveScreen>()
    const route = useRoute();
    

    const handleLogin = () => {
        authenticationUser({
            username: 'Gustavo',
            password: '123456'
        })
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
            <ContainerInput>
                <Text> Main screen to Sigin</Text>
                <Input placeholder="Username" placeholderTextColor="white" icon="user"/>
                <Input placeholder="Password" placeholderTextColor="white" icon="lock"/>
                <Button onPress={handleLogin}> Entrar </Button>
            </ContainerInput>
        </Container>
    )
}