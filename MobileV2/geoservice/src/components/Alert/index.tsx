import React from 'react';
import Animated,{FadeInUp,FadeOutUp} from 'react-native-reanimated'; 
import { Container, ContainerWhite, Icon, Success, Error, Title, Description, ModalAlert } from './styled';

const AlertToastSuccess = () => {
    return (
        <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
            style={{
                flexDirection: 'row',
                padding: 20,
                alignItems: "center",
                top: 150,
                left: 20,
                right: 20,
                position: "absolute",
            }}
        >
            <Success>
                <Icon name="checkcircleo" size={28} color="white"/>
            </Success>
            <ContainerWhite>
                <Title>Oba...</Title>
                <Description>Cadastro realizado com sucesso!</Description>
            </ContainerWhite>
        </Animated.View>
    );
}

const AlertToastError = () => {
    return (
        <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
            style={{
                flexDirection: 'row',
                padding: 20,
                alignItems: "center",
                top: 150,
                left: 20,
                right: 20,
                position: "absolute",
            }}
        >
            <Error>
                <Icon name="closecircleo" size={28} color="white"/>
            </Error>
            <ContainerWhite>
                <Title>Ops...</Title>
                <Description>Valide usuário e senha!</Description>
            </ContainerWhite>
        </Animated.View>
    );
}

export { AlertToastError, AlertToastSuccess }