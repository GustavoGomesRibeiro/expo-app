import React from 'react';
import Animated,{FadeInUp,FadeOutUp} from 'react-native-reanimated'; 
import * as Style from './styled';

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
            <Style.Success>
                <Style.Icon name="checkcircleo" size={28} color="white"/>
            </Style.Success>
            <Style.ContainerWhite>
                <Style.Title>Oba...</Style.Title>
                <Style.Description>{children}</Style.Description>
            </Style.ContainerWhite>
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
            <Style.Error>
                <Style.Icon name="closecircleo" size={28} color="white"/>
            </Style.Error>
            <Style.ContainerWhite>
                <Style.Title>Ops...</Style.Title>
                <Style.Description>{children}</Style.Description>
            </Style.ContainerWhite>
        </Animated.View>
    );
}

export { AlertToastError, AlertToastSuccess }