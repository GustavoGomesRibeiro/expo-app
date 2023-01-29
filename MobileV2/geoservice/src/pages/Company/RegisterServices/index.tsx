import React, {useState, useRef } from 'react';

import { useNavigation } from '@react-navigation/native'
import { ReceiveScreen } from '@utils/NavigationRoutes';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Picker } from '@react-native-picker/picker';


import * as S from './styled';

import Header from '@components/Header';
import Input from '@components/Input';

export default function RegisterServices(){
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation<ReceiveScreen>();

  return (
    <S.Container>
      <Header icon="arrow-left" onPress={() => navigation.goBack()} title="Cadastro"/>
      <S.ScrollView>

      <Form ref={formRef} onSubmit={() => {}}>
          <S.Label>Nome Estabelecimento</S.Label>
          <Input
            name="username" 
            type="username" 
            placeholder="Nome do estabelecimento"
            placeholderTextColor="white"
            icon="tag"   
            onSubmitEditing ={() => {
              formRef.current?.submitForm();
          }}                
          />

          <S.Label>Telefone</S.Label>
          <Input
            name="username" 
            type="username" 
            placeholder="Telefone"
            placeholderTextColor="white"
            icon="phone"   
            onSubmitEditing ={() => {
              formRef.current?.submitForm();
          }}                
          />
          <S.Label>Tipo</S.Label>
          <Picker>
            <Picker.Item label="Escolha o tipo" value=""/>
            <Picker.Item label="Carros" value="Carros"/>
            <Picker.Item label="Motos" value="Motos"/>
          </Picker>

          <S.Label>Fotos do Estabelecimento</S.Label>

          <S.Label>Hórario de Funcionamento</S.Label>
          <Picker>
            <Picker.Item label="Escolha o hórario de funcionamento" value=""/>
            <Picker.Item label="Das 8h às 17h" value="Das 8h às 17h"/>
            <Picker.Item label="Das 8h às 18h" value="Das 9h às 18h"/>
          </Picker>

          <S.Label></S.Label>
          <S.SwitchWeek
            thumbColor="#fff"
            trackColor={{false: "#ccc", true: "#39CC83"}}
          />
        </Form>
      </S.ScrollView>
    </S.Container>
  );
}