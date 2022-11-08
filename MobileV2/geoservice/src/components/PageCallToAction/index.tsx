import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { ReceiveScreen } from '../../../utils/NavigationRoutes';

import { GeneralPropsCallToAction } from '../../utils/interfaces/interfaceGeneralProps';
import Button from '../../components/Button/index';

import { AntDesign  } from '@expo/vector-icons'; 
import {
    Container,
    ContentIcon,
    Icon,
    ContentDescription,
    Title,
    Description,
    ContentButtons,
} from './styled';


export default function PageCallToAction({children, sessionUser, sessionEstablishment, ...rest}: GeneralPropsCallToAction) {

    const navigation = useNavigation<ReceiveScreen>();

    return (
        <Container>
            <ContentIcon>
                <Icon onPress={() => navigation.navigate("Main")}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                </Icon>
            </ContentIcon>
            <ContentDescription>
                <Title>Quer ser um membro?</Title>
                <Description> { children }</Description>
            </ContentDescription>
            <ContentButtons>
                <Button onPress={() => sessionUser ? navigation.navigate("Signin", {session: 'user'}) : navigation.navigate("Signin", {session: 'establishment'})}> Entrar </Button>
                <Button onPress={() => navigation.navigate("Register")}> Cadastrar </Button>
            </ContentButtons>
        </Container>
    )
}