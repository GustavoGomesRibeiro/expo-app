import React, { useContext } from 'react';
import Animated,{FadeInUp,FadeOutUp} from 'react-native-reanimated'; 
import { ContextApi } from '@hooks/authContext';

import * as S from './styled';

const AlertToastSuccess = ({children}: any) => {
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
            <S.Success>
                <S.Icon name="checkcircleo" size={28} color="white"/>
            </S.Success>
            <S.ContainerWhite>
                <S.Title>Oba...</S.Title>
                <S.Description>{children}</S.Description>
            </S.ContainerWhite>
        </Animated.View>
    );
}

const AlertToastError = ({children}: any) => {
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
            <S.Error>
                <S.Icon name="closecircleo" size={28} color="white"/>
            </S.Error>
            <S.ContainerWhite>
                <S.Title>Ops...</S.Title>
                <S.Description>{children}</S.Description>
            </S.ContainerWhite>
        </Animated.View>
    );
}

const AlertToastWarning = ({isOpened}: any) => {
    const { signOut } = useContext(ContextApi);
    return (
        <S.ModalAlert>
            <S.Content>
                <S.Alert>
                    <S.Icon name="warning" size={24} color="#f8bb86"/>
                </S.Alert>
                <S.Title>Você tem certeza?</S.Title>
                <S.Description>Confirme para sair</S.Description>

                <S.ContainerBtn>
                    <S.BtnConfirmation onPress={isOpened}>
                        <S.Text>Não</S.Text>
                    </S.BtnConfirmation>

                    <S.BtnConfirmation onPress={signOut}>
                        <S.Text>Sim</S.Text>
                    </S.BtnConfirmation>
                </S.ContainerBtn>
            </S.Content>
        </S.ModalAlert>
    )
};

export { AlertToastError, AlertToastSuccess, AlertToastWarning }