import React, { useRef, useContext } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { KeyboardAvoidingView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ContextApi } from '../../../hooks/authContext';
import { ReceiveScreen } from '../../../utils/NavigationRoutes';
import { AlertToastError } from '../../../components/Alert';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

import Login from '../../../assets/imgs/login.svg'
import { Container, ContainerHeader, ContainerInput, Logo,  Text } from './styled';

export default function Register() {
    const { enableVision, visible, error } = useContext(ContextApi);
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation<ReceiveScreen>();

    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <Container>
            <ContainerHeader>
                <Header icon="arrow-left" onPress={() => navigation.goBack()} title="Cadastro"/>
            </ContainerHeader>
            
            {error === 'error' ? <AlertToastError /> : null }

            <KeyboardAvoidingView behavior="position">
                <ContainerInput>
                    <Logo>
                        <Login width={250} height={250} />
                    </Logo>

                    <Form ref={formRef} onSubmit={handleLogin}>
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
                        <Button> Cadastrar </Button>
                    </Form>
                </ContainerInput>
            </KeyboardAvoidingView>
        </Container>
    )
}