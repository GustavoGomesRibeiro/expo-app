import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  height: 150px;
  padding: 20px;
`;

export const Title = styled.Text`
    margin-top: 30px;
    font-family: ${props => props.theme.fonts_poppins.strong};
    font-size: 28px;
    color: ${props => props.theme.fonts_poppins.primaryColor};
    height: 50px;
`;