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

import { Container, ContainerInput, Text } from './styled';

export default function Signin() {
    const formRef = useRef<FormHandles>(null);

    const { authenticationUser, authenticationEstablishment } = useContext(ContextApi);
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
            <Header icon="arrow-left" onPress={routeNavigation}/>
            <KeyboardAvoidingView behavior="position">
                <ContainerInput>
                    <Text> Main screen to Sigin</Text>
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
                            secureTextEntry={true}   
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