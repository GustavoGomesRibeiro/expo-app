import React, { useRef, useContext, useCallback } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { KeyboardAvoidingView  } from 'react-native';
import { useNavigation, useRoute, RouteProp  } from '@react-navigation/native';
import * as Yup from 'yup';


import { ContextApi } from '@hooks/authContext';
import { ReceiveScreen } from '@utils/NavigationRoutes';
import { IRegister } from '@utils/interfaces/interfaceAuthentication';

import { AlertToastError, AlertToastSuccess } from '@components/Alert';
import Header from '@components/Header';
import Input from '@components/Input';
import Button from '@components/Button';

import Signup from '@assets/imgs/signup.svg';

import * as Style from './styled';

export default function Register() {
    const { registerUser, registerEstablishment, enableVision, visible, error, success } = useContext(ContextApi);
    const route: RouteProp<{params: {session: string}}>  = useRoute();

    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation<ReceiveScreen>();


    const handleRegister = useCallback(async (data: IRegister) => {
        
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().email('Digite um e-mail válido').required('Email obrigatório'),
                username: Yup.string().required('Usuário obrigatório'),
                password: Yup.string().min(8, 'Senha deve ter pelo menos 8 caracteres').required('Senha obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            if(route.params?.session === 'user'){
                await registerUser({
                    email: data.email,
                    username: data.username,
                    password: data.password,
                })
                setTimeout(() => {
                    navigation.navigate('Signin', {session: 'user'});
                }, 2000);
            } else {
                await registerEstablishment({
                    email: data.email,
                    username: data.username,
                    password: data.password,
                })
                setTimeout(() => {
                    navigation.navigate('Signin', {session: 'establishment'});
                }, 2000);
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
                <Header icon="arrow-left" onPress={() => navigation.goBack()} title="Cadastro"/>
            </Style.ContainerHeader>
            
            {error === 'error' ? <AlertToastError>Algo deu errado, tente novamente!</AlertToastError> : null }
            {success === 'ok' ? <AlertToastSuccess>Cadastro realizado com sucesso!</AlertToastSuccess> : null }

            <KeyboardAvoidingView behavior="position">
                <Style.ContainerInput>
                    <Style.Logo>
                        <Signup width={250} height={250} />
                    </Style.Logo>

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
                </Style.ContainerInput>
            </KeyboardAvoidingView>
        </Style.Container>
    )
}