import React, { useState, useContext } from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { ContextApi } from '@hooks/authContext';

import HeaderCustom from '@components/HeaderCustom';
import { AlertToastWarning } from '@components/Alert';

import * as S from './styled';

export default function Settings() {
  const [ isEnabled, setIsEnabled ] = useState<boolean>(false)
  const [ isOpened, setIsOpened] = useState<boolean>(false);

  const { toggleTheme, theme } = useContext(ContextApi);

  const isDarkMode = theme === 'dark';

  const openModal = () => {
    setIsOpened(event => !event)
  }
  

  return (
    <S.Container>
      <HeaderCustom>Configurações</HeaderCustom>
      {isOpened && <AlertToastWarning isOpened={openModal}/>}

      <S.MainContainer>
        <S.Content>
          <S.Configs>
            <S.Btn>
              <S.Item>
                <S.Icon>
                  <MaterialIcons name="fingerprint" size={24} color="white" />
                </S.Icon>
                <S.Description>   
                  <S.Text> Privacidade </S.Text>
                  <S.Label> Defina como quer acessar o app</S.Label>
                </S.Description>
              </S.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </S.Btn>

            <S.Divider></S.Divider>

            <S.Btn>
              <S.Item>
                <S.Theme>
                  <Ionicons name="moon" size={24} color="white" />
                </S.Theme>
                <S.Description>
                  <S.Text> Tema </S.Text>
                  <S.Label> Altere o tema</S.Label>
                </S.Description>
              </S.Item>
              <S.SwitchTheme 
                onValueChange={toggleTheme}
                value={isDarkMode}
              />
            </S.Btn>
          </S.Configs>
        </S.Content>

        <S.Content>
          <S.Configs>
            <S.Btn>
              <S.Item>
                <S.FeedBack>
                  <MaterialIcons name="messenger" size={24} color="white" />
                </S.FeedBack>
                <S.Description>
                  <S.Text> Envie seu FeedBack </S.Text>
                  <S.Label> Nos ajude a melhorar </S.Label>
                </S.Description>
              </S.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </S.Btn>            
          </S.Configs>
        </S.Content>

        <S.Content>
          <S.Configs>
            <S.Btn>
              <S.Item>
                <S.About>
                  <Ionicons name="information-circle" size={24} color="white" />
                </S.About>
                <S.Description>
                  <S.Text> Sobre </S.Text>
                  <S.Label> Sobre o app</S.Label>
                </S.Description>
              </S.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </S.Btn>            
          </S.Configs>
        </S.Content>
        
        <S.ContainerTitle>
          <S.Title>Conta</S.Title>
        </S.ContainerTitle>

        <S.Content>
          <S.Configs>
            <S.Btn onPress={openModal}>
              <S.Item>
                <S.Account>
                  <Ionicons name="log-in" size={24} color={isDarkMode ? "#fff" : '#898989'} />
                </S.Account>
                <S.Text> Sair </S.Text>
              </S.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </S.Btn>

            <S.Divider></S.Divider>

            <S.Btn>
              <S.Item>
                <S.Account>
                  <Ionicons name="trash" size={24} color={isDarkMode ? "#fff" : '#898989'} />
                </S.Account>
                <S.TextDelete> Deletar conta </S.TextDelete>
              </S.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </S.Btn>
          </S.Configs>
        </S.Content>
      </S.MainContainer>
    </S.Container>
  );
}