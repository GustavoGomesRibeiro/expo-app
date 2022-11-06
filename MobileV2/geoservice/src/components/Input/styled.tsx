import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  width: 290px;
  height: 58px;
  background: #232129;
  border-radius: 10px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    border-radius: 10px;
    color: #fff;
    font-size: 14px;
    font-family: 'Archivo_700Bold';
`;

export const Button = styled.TouchableOpacity``;

export const Icon = styled(Feather) `
  padding: 10px;
`;