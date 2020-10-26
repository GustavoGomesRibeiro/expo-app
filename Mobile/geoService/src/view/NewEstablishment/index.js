import React from 'react';
import { Feather } from '@expo/vector-icons';
import Headers from '../../components/Headers';
import { 
    Container,
    ScrollView,
    Title,
    Label,
    Input,
    Add,
    SwitchContainer,
    Switch,
    Register,
    ButtonText

} from './styled-components';

export default function NewEstablishment() {
    return (
        <Container>
            <Headers title='Cadastrar Estabelecimento'/>
            <ScrollView>
                <Title>Dados</Title>
                <Label>Nome</Label>
                <Input/>

                <Label>WhatsApp</Label>
                <Input/>

                <Label>Ramo de Atividade</Label>
                <Input/>
                
                <Label>Fotos do Estabelecimento</Label>
                <Add>
                    <Feather name="plus" size={24} color="#15B6D6" />
                </Add>

                <Label>Horário de funcionamento</Label>
                <Input/>

                <SwitchContainer>
                    <Label> Atende final de semana?</Label>
                    <Switch
                        thumbColor="#fff" 
                        trackColor={{ false: '#ccc', true: '#39CC83' }}
                    />
                </SwitchContainer>

                <Register onPress={() => {}}>
                    <ButtonText> Cadastrar </ButtonText>
                </Register>
            </ScrollView>
        </Container>
    );
}