import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../../../components/Button';

import {
    Container,
    Icon,
    Title,
    Description,
} from './styled-components';


export default function SessionUser({ navigation }) {
    return (
        <Container>
            <Icon>
                <AntDesign name='arrowleft' size={20} onPress={() => navigation.navigate('Signin')}/>
            </Icon>
            <Title>Quer ser um membro?</Title>
            <Description> 
                Para começar, você precisa se cadastrar como usuario para poder buscar serviços pela região.
            </Description>

            <Button onPress={() => navigation.navigate('Login')}> Entrar </Button>
            <Button onPress={() => navigation.navigate('RegisterUser')}> Cadastrar </Button>

        </Container>
    )
}