import React, { useState, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Contextapi } from '../../../hooks/authContext';

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
    const { signInEstablishment } = useContext(Contextapi);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        signInEstablishment({
            username: username,
            password: password
        });
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

                <Button onPress={handleSubmit}> Entrar </Button>
                <Footer>
                    <ButtonForgot>
                        <Forgot onPress={() => navigation.navigate('ForgotPassword')}> Esqueci minha senha </Forgot>
                    </ButtonForgot>
                </Footer>
        </Container>
    );
}