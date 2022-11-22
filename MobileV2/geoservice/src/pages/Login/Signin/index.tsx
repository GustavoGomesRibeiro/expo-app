import React, { useContext, useRef, useCallback } from 'react';
import { KeyboardAvoidingView  } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { ContextApi } from '@hooks/authContext';
import { ReceiveScreen } from '@utils/NavigationRoutes';
import { ISignin } from '@utils/interfaces/interfaceAuthentication';

import { AlertToastError } from '@components/Alert';
import Header from '@components/Header';
import Input from '@components/Input';
import Button from '@components/Button';

import Login from '@assets/imgs/login.svg'

import * as Style from './styled';

export default function Signin() {    
    const formRef = useRef<FormHandles>(null);

    const { authenticationUser, authenticationEstablishment, enableVision, visible, error } = useContext(ContextApi);
    const navigation = useNavigation<ReceiveScreen>();
    const route: RouteProp<{ params: {session: string}}> = useRoute();
    

    const handleLogin = useCallback(async (data: ISignin) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                username: Yup.string().required('Usuário obrigatório.'),
                password: Yup.string().required('Senha obrigatória.'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            if(route.params?.session === 'user') {
                authenticationUser({
                    username: data.username,
                    password: data.password
                })
            } else {
                authenticationEstablishment({
                    username: data.username,
                    password: data.password
                })
            }            
        } catch (err) {
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
              err.inner.forEach(error => {
                validationErrors[error.path] = error.message;
              });
              formRef.current?.setErrors(validationErrors);
            }
        }
    },[])

    return (
        <Style.Container>
            <Style.ContainerHeader>
                <Header icon="arrow-left" onPress={() => navigation.goBack()} title="Login"/>
            </Style.ContainerHeader>
            
            {error === 'error' ? <AlertToastError>Valide usuário e senha!</AlertToastError> : null }

            <KeyboardAvoidingView behavior="position">
                <Style.ContainerInput>
                    
                    <Style.Logo>
                        <Login width={250} height={250} />
                    </Style.Logo>
                    
                    <Form ref={formRef} onSubmit={handleLogin}>
                        <Input 
                            name="username" 
                            type="username"
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
                    <Style.Footer>
                        <Style.ForgotPassword onPress={() => {}}><Style.Text>Esqueci minha senha</Style.Text></Style.ForgotPassword>
                    </Style.Footer>
                </Style.ContainerInput>
            </KeyboardAvoidingView>
        </Style.Container>
    )
}