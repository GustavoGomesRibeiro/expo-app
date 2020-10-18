import React from 'react';
import { FontAwesome5 } from 'react-native-vector-icons';
import { 
    Container,
    Image,
    Descriptions,
    Title,
    TitleBold,
    Actions,
    User,
    Establishment,
    Text,
    TextEstablishment 
} from './styled-components';

//img
import logo from '../../../assets/logo.png';

export default function Signin({ navigation }) {
    return (
        <Container>
           <Image source={logo}/> 

           <Descriptions>
                <Title>Seja bem-vindo, </Title>
               <TitleBold>O que deseja fazer?</TitleBold>
           </Descriptions>

           <Actions>
               <User onPress={() => navigation.navigate('SessionUser')}>
                    <FontAwesome5 name='users' size={30}/>
                   <Text>Área do usuário</Text>
               </User>
               <Establishment onPress={() => navigation.navigate('SessionEstablishment')}>
                    <FontAwesome5 name='map-marked-alt' size={30} color="#fff"/>
                    <TextEstablishment>Área do {'\n'}estabelecimento</TextEstablishment>
               </Establishment>
           </Actions>
        </Container>
    );
}