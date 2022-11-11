import React, { useRef, useContext, useCallback } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { KeyboardAvoidingView  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ContextApi } from '../../../hooks/authContext';
import { ReceiveScreen } from '../../../utils/NavigationRoutes';
import { IRegister } from '../../../utils/interfaces/interfaceAuthentication';

import { AlertToastError } from '../../../components/Alert';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

import Signup from '../../../assets/imgs/signup.svg'
import { Container, ContainerHeader, ContainerInput, Logo,  Text } from './styled';

export default function Register() {
    const { registerUser, registerEstablishment, enableVision, visible, error } = useContext(ContextApi);
    const route = useRoute();

    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation<ReceiveScreen>();


    const handleRegister = useCallback(async (data: IRegister) => {
        if(route.params?.session === 'user'){
            registerUser({
                email: data.email,
                username: data.username,
                password: data.password,
            })
        } else {
            registerEstablishment({
                email: data.email,
                username: data.username,
                password: data.password,
            })
        }
    },[])

    return (
        <Container>
            <ContainerHeader>
                <Header icon="arrow-left" onPress={() => navigation.goBack()} title="Cadastro"/>
            </ContainerHeader>
            
            {error === 'error' ? <AlertToastError /> : null }

            <KeyboardAvoidingView behavior="position">
                <ContainerInput>
                    <Logo>
                        <Signup width={250} height={250} />
                    </Logo>

                    <Form ref={formRef} onSubmit={handleRegister}>
                        <Input 
                            name='email'
                            type='email'
                            icon='mail'
                            placeholder="Email"
                            placeholderTextColor="white" 
                            onSubmitEditing ={() => {
                                formRef.current?.submitForm();
                            }}
                        />
                        <Input 
                            name='username'
                            type='email'
                            icon='user'
                            placeholder="Username"
                            placeholderTextColor="white" 
                            onSubmitEditing ={() => {
                                formRef.current?.submitForm();
                            }}
                        />
                        <Input 
                            name='password'
                            type='email'
                            placeholder="Password"
                            placeholderTextColor="white" 
                            icon='lock'
                            icon_eye_opened="eye"
                            icon_eye_closed="eye-off"
                            secureTextEntry={!!visible}
                            visible={enableVision}
                            isVisible={visible}
                            onSubmitEditing ={() => {
                                formRef.current?.submitForm();
                            }}
                        />
                        <Button onPress={() => formRef.current?.submitForm()}> Cadastrar </Button>
                    </Form>
                </ContainerInput>
            </KeyboardAvoidingView>
        </Container>
    )
}