import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { ReceiveScreen } from '@utils/NavigationRoutes';

import { FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons'; 

import logo from '@assets/imgs/logo.png';

import * as Style from './styled';




export default function Main() {
    const [ user, setUser ] = useState('#fff');
    const [ establishment, setEstablishment] = useState('#000');

    const navigation = useNavigation<ReceiveScreen>();
    return (
        <Style.Container>
            <Style.Logo>
                <Style.Img source={logo}/>
            </Style.Logo>

            <Style.ContentDescription>
                <Style.Welcome> Seja bem-vindo,</Style.Welcome>
                <Style.LabelOption> O que deseja fazer?</Style.LabelOption>
            </Style.ContentDescription>

            <Style.ContainerButton>
                <Style.ButtonUser onPress={() => navigation.navigate('SessionUser')} user={user}>
                    <Style.Icon>
                        <FontAwesome name="users" size={26} color="black" />
                    </Style.Icon>

                    <Style.ContainerText>
                        <Style.TextUser>Área do Usuário</Style.TextUser>
                    </Style.ContainerText>
                </Style.ButtonUser>

                <Style.ButtonEstablishment onPress={() => navigation.navigate('SessionEstablishment')} establishment={establishment}>
                    <Style.Icon>
                        <MaterialCommunityIcons name="warehouse" size={26} color="white" />
                    </Style.Icon>
                    <Style.ContainerText>
                        <Style.TextEstablishment>Área do Estabelecimento</Style.TextEstablishment>
                    </Style.ContainerText>
                </Style.ButtonEstablishment>
            </Style.ContainerButton>
        </Style.Container>
    )
}