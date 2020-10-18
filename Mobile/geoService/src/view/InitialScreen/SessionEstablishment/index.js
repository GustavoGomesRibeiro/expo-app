import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../../../components/Button';

import {
    Container,
    Icon,
    Title,
    Description,
} from './styled-components';


export default function SessionEstablishment({ navigation }) {
    return (
        <Container>
            <Icon>
                <AntDesign name='arrowleft' size={20} onPress={() => navigation.navigate('Signin')}/>
            </Icon>
            <Title>Quer ser um prestador de serviços?</Title>
            <Description> 
                Para começar, você precisa se cadastrar como estabelecimento para fornecer serviços.
            </Description>

            <Button onPress={() => navigation.navigate('LoginEstablishment')}> Entrar </Button>
            <Button onPress={() => navigation.navigate('RegisterEstablishment')}> Cadastrar </Button>


        </Container>
    )
}