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
    font-size: 14px;
    color: ${ props => props.theme.fonts_archivo.secondaryColor};
    font-family: ${props => props.theme.fonts_archivo.strong};

`;

export const Button = styled.TouchableOpacity``;

export const Text = styled.Text`
  color: #f00;
  margin-right: 10px;
`;

export const ContentRequired = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather) `
  padding: 10px;
`;