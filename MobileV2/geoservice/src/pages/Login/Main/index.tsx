import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { ReceiveScreen } from '../../../utils/NavigationRoutes';

import { Container, TextUser, TextEstablishment, Logo, Img, ContainerButton, ButtonUser, ButtonEstablishment, Icon, ContainerText } from './styled';

import { FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons'; 
import logo from '../../../assets/imgs/logo.png';


export default function Main() {
    const [ user, setUser ] = useState('#fff');
    const [ establishment, setEstablishment] = useState('#000');

    const navigation = useNavigation<ReceiveScreen>();
    return (
        <Container>
            <Logo>
                <Img source={logo}/>
            </Logo>
            <ContainerButton>
                <ButtonUser onPress={() => navigation.navigate('Home')} user={user}>
                    <Icon>
                        <FontAwesome name="users" size={26} color="black" />
                    </Icon>

                    <ContainerText>
                        <TextUser>Área do Usuário</TextUser>
                    </ContainerText>
                </ButtonUser>

                <ButtonEstablishment onPress={() => navigation.navigate('Home')} establishment={establishment}>
                    <Icon>
                        <MaterialCommunityIcons name="warehouse" size={26} color="white" />
                    </Icon>
                    <ContainerText>
                        <TextEstablishment>Área do Estabelecimento</TextEstablishment>
                    </ContainerText>
                </ButtonEstablishment>
            </ContainerButton>
        </Container>
    )
}