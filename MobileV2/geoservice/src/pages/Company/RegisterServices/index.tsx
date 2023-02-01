import React, {useState, useRef, useContext } from 'react';

import { ContextRegisterCompany } from '@hooks/registerContext';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { ReceiveScreen } from '@utils/NavigationRoutes';
import { IRegisterCompany } from '@utils/interfaces/interfaceRegisterCompany';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Picker } from '@react-native-picker/picker';

import { Feather } from '@expo/vector-icons';

import * as S from './styled';

import Header from '@components/Header';
import Input from '@components/Input';

export default function RegisterServices(){
  const { registerCompany } = useContext(ContextRegisterCompany);
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation<ReceiveScreen>();
  const route: RouteProp<{params: {position: []}}> = useRoute();

  const { latitude, longitude } = route.params.position;

  console.log('latitude:', latitude, 'longitude:', longitude)

  const handleRegister = (data: IRegisterCompany) => {
    // registerCompany({
    //   name: data.info.name, 
    //   whatsapp: data.info.whatsapp, 
    //   industry: data.info.industry, 
    //   latitude: latitude, 
    //   longitude: longitude, 
    //   opening_hours: data.info.opening_hours, 
    //   open_on_weekends: data.info.open_on_weekends
    // })
  }

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
          <Picker
            style={{
              backgroundColor: "#e9e9e9"
            }}
          >
            <Picker.Item label="Escolha o tipo" value=""/>
            <Picker.Item label="Carros" value="Carros"/>
            <Picker.Item label="Motos" value="Motos"/>
          </Picker>

          <S.Label>Fotos do Estabelecimento</S.Label>
          <S.UploadPhotos>
            <S.Image/>
            <S.Image/>
            <S.Image/>
            <S.Image/>
          </S.UploadPhotos>
          <S.AddPhoto>
            <Feather name="plus" size={24} color="#000"/>
          </S.AddPhoto>

          <S.Label>Hórario de Funcionamento</S.Label>
          <Picker
            style={{
              backgroundColor: "#e9e9e9"
            }}          
          >
            <Picker.Item label="Escolha o hórario de funcionamento" value=""/>
            <Picker.Item label="Das 8h às 17h" value="Das 8h às 17h"/>
            <Picker.Item label="Das 8h às 18h" value="Das 9h às 18h"/>
          </Picker>

          <S.SwitchContainer>
            <S.Label>Atende final de semana?</S.Label>
            <S.SwitchWeek
              thumbColor="#fff"
              trackColor={{false: "#ccc", true: "#39CC83"}}
            />
          </S.SwitchContainer>
        </Form>
        
        <S.Register onPress={handleRegister}>
          <S.ButtonText> Cadastrar </S.ButtonText>
        </S.Register>
      </S.ScrollView>
    </S.Container>
  );
}