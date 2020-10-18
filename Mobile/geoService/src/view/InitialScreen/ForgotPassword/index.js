import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { AntDesign } from '@expo/vector-icons'; 


import { 
    Container,
    Icon,
    Title,
    Description
} from './styled-components';

export default function ForgotPassoword({ navigation }) {
    return(
        <Container>
            <Icon>
                <AntDesign name='arrowleft' size={20} onPress={() => navigation.navigate('Login')}/>
            </Icon>
            <Title>Esqueceu seu usuário ou senha?</Title>
            <Description> 
                Para recuperar, você precisa inserir seu email cadastrado.
            </Description>

            <Input name='Forgot' icon='mail' placeholder='E-mail'/>
            <Button> Enviar </Button>
        </Container>
    );
}