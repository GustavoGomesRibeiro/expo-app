import React, { useState } from 'react';
// import logo from '../../assets/logo.png';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Alert } from 'react-native';
import { 
  Container,
  // Image, 
  Description,
  Title 
} from './styled-components';
import api from '../../../service/api';



export default function RegisterEstablishment() {

  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ establishment, setEstablishment ] = useState('');
  const [ industry, setIndustry ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');


  handleregister = async ({ navigation }) => {
    if(!email || !username || !password || !establishment || !industry || !whatsapp){
      Alert.alert(
        'Informações Inválidas',
        'Os campos não podem ficar vazios!'
        );
    } else {
      try {
        const response = await api.post('/establishments', {
          email,
          username,
          password,
          establishment,
          industry,
          whatsapp
        });

        console.log('cadastro establishment', response);

        navigation.navigate('LoginEstablishment');

      } catch (error) {
        'Erro ao registrar',
        'Ops algo deu errado. Tente novamente!'
      }
    }
  }

    return(
      <Container>
          {/* <Image source={logo}/> */}

        <Description>
          <Title> Crie sua conta </Title>
        </Description>

          <Input name='email' icon='mail' placeholder='E-mail'/>
          <Input name='username' icon='user' placeholder='Username'/>
          <Input name='password' icon='lock' placeholder='Senha'/>
          <Input name='establishment' icon='home' placeholder='Nome do estabelecimento'/>
          <Input name='industry' icon='clipboard' placeholder='Ramo de Atividade'/>
          <Input name='whatsapp' icon='smartphone' placeholder='WhatsApp'/>
          
          <Button> Cadastrar </Button>
      </Container>  
    );
}
