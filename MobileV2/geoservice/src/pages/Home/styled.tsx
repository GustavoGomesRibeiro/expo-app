import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${ props => props.theme.colorsDefault.primaryBackground};
`;

export const Text = styled.Text`
    color: ${props => props.theme.textDefault.txtPrimary};
    background-color: ${props => props.theme.colorsDefault.primaryBackground}
`;
