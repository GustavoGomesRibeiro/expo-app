import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { ReceiveScreen } from '@utils/NavigationRoutes';

import { GeneralPropsCallToAction } from '@utils/interfaces/interfaceGeneralProps';
import Button from '@components/Button/index';

import { AntDesign  } from '@expo/vector-icons'; 
import * as Style from './styled';


export default function PageCallToAction({children, sessionUser, sessionEstablishment, ...rest}: GeneralPropsCallToAction) {

    const navigation = useNavigation<ReceiveScreen>();

    return (
        <Style.Container>
            <Style.ContentIcon>
                <Style.Icon onPress={() => navigation.navigate("Main")}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </Style.Icon>
            </Style.ContentIcon>
            <Style.ContentDescription>
                <Style.Title>Quer ser um membro?</Style.Title>
                <Style.Description> { children }</Style.Description>
            </Style.ContentDescription>
            <Style.ContentButtons>
                <Button onPress={() => sessionUser ? navigation.navigate("Signin", {session: 'user'}) : navigation.navigate("Signin", {session: 'establishment'})}> Entrar </Button>
                <Button onPress={() => sessionUser ? navigation.navigate("Register", {session: 'user'}) : navigation.navigate("Register", {session: 'establishment'})}> Cadastrar </Button>
            </Style.ContentButtons>
        </Style.Container>
    )
}