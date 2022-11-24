import React from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import HeaderCustom from '@components/HeaderCustom';

import * as Style from './styled';

export default function Settings() {
  return (
    <Style.Container>
      <HeaderCustom>Configurações</HeaderCustom>

      <Style.MainContainer>
        <Style.Content>
          <Style.Configs>
            <Style.Btn>
              <Style.Item>
                <Style.Icon>
                  <MaterialIcons name="fingerprint" size={24} color="white" />
                </Style.Icon>
                <Style.Text> Privacidade </Style.Text>
              </Style.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Style.Btn>

            <Style.Divider></Style.Divider>

            <Style.Btn>
              <Style.Item>
                <Style.Icon>
                  <Ionicons name="moon" size={24} color="white" />
                </Style.Icon>
                <Style.Text> Tema </Style.Text>
              </Style.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Style.Btn>
          </Style.Configs>
        </Style.Content>

        <Style.Content>
          <Style.Configs>
            <Style.Btn>
              <Style.Item>
                <Style.Icon>
                  <MaterialIcons name="messenger" size={24} color="white" />
                </Style.Icon>
                <Style.Text> Envie seu FeedBack </Style.Text>
              </Style.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Style.Btn>            
          </Style.Configs>
        </Style.Content>

        <Style.Content>
          <Style.Configs>
            <Style.Btn>
              <Style.Item>
                <Style.Icon>
                <Ionicons name="information-circle" size={24} color="white" />
                </Style.Icon>
                <Style.Text> Sobre </Style.Text>
              </Style.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Style.Btn>            
          </Style.Configs>
        </Style.Content>
        
        <Style.ContainerLabel>
          <Style.Label>Conta</Style.Label>
        </Style.ContainerLabel>

        <Style.Content>
          <Style.Configs>
            <Style.Btn>
              <Style.Item>
                <Ionicons name="log-in" size={24} color="#898989" />
                <Style.Text> Sair </Style.Text>
              </Style.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Style.Btn>

            <Style.Divider></Style.Divider>

            <Style.Btn>
              <Style.Item>
                <Ionicons name="trash" size={24} color="#898989" />
                <Style.Text>Deletar conta </Style.Text>
              </Style.Item>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </Style.Btn>
          </Style.Configs>
        </Style.Content>
      </Style.MainContainer>
    </Style.Container>
  );
}