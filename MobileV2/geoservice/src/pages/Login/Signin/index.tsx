import React, { useContext, useRef } from 'react';
import { KeyboardAvoidingView  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { ReceiveScreen } from '../../../utils/NavigationRoutes';
import { ContextApi } from '../../../hooks/authContext';
import { ISignin } from '../../../utils/interfaces/interfaceAuthentication';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

import Login from '../../../assets/imgs/login.svg'

import { Container, ContainerInput, Text, Logo, ContainerHeader } from './styled';

export default function Signin() {    
    const formRef = useRef<FormHandles>(null);

    const { authenticationUser, authenticationEstablishment, enableVision, visible } = useContext(ContextApi);
    const navigation = useNavigation<ReceiveScreen>()
    const route = useRoute();
    

    const handleLogin = (data: ISignin) => {
        console.log(data)
        if(route.params?.session === 'user') {
            authenticationUser({
                username: data.username,
                password: data.password
            })
            // navigation.navigate('Home');
        } else {
            authenticationEstablishment({
                username: data.username,
                password: data.password
            })
            // navigation.navigate('Home');
        }

    }

    const routeNavigation = () => {
        if(route.params?.session === 'user') {
            navigation.navigate('SessionUser');
        } else {
            navigation.navigate('SessionEstablishment');
        }
    }

    return (
        <Container>
            <ContainerHeader>
                <Header icon="arrow-left" onPress={routeNavigation} title="Login"/>
            </ContainerHeader>
            <KeyboardAvoidingView behavior="position">
                <ContainerInput>
                    <Logo>
                        <Login width={250} height={250} />
                    </Logo>
                    <Form ref={formRef} onSubmit={handleLogin}>
                        <Input 
                            name="username" 
                            type="email"
                            placeholder="Username" 
                            placeholderTextColor="white" 
                            icon="user"
                            onSubmitEditing ={() => {
                                formRef.current?.submitForm();
                            }}
                        />
                        <Input 
                            name="password" 
                            type="password" 
                            placeholder="Password"
                            placeholderTextColor="white" 
                            icon="lock"
                            icon_eye_opened="eye"
                            icon_eye_closed="eye-off"
                            secureTextEntry={!!visible}
                            visible={enableVision}
                            isVisible={visible}   
                            onSubmitEditing ={() => {
                                formRef.current?.submitForm();
                            }}                     
                        />
                        <Button onPress={() => formRef.current?.submitForm()}> Entrar </Button>
                    </Form>
                </ContainerInput>
            </KeyboardAvoidingView>
        </Container>
    )
}