import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { ReceiveScreen } from '../../../utils/NavigationRoutes';

import { Props } from '../../utils/interfaces/interfaceProps';
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


export default function PageCallToAction({children, sessionUser, sessionEstablishment, ...rest}: Props) {

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
                <Button onPress={() => sessionUser ? navigation.navigate("Home") : navigation.navigate("Main")}> Entrar </Button>
                <Button onPress={() => sessionUser ? navigation.navigate("RegisterUser") : navigation.navigate("RegisterEstablishment")}> Registrar </Button>
            </ContentButtons>
        </Container>
    )
}