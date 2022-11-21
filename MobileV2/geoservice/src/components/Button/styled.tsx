import styled from 'styled-components/native';

export const Container = styled.View``;

export const Btn = styled.TouchableOpacity`
    display: flex;  
    justify-content: center;
    align-items: center;
    width: 290px;
    height: 50px;
    border-radius: 10px;
    background-color: ${ props => props.theme.colorsButton.btnDefault};
    margin-top: 10px;
`;

export const Text = styled.Text`
    font-size: 14px;
    color: ${ props => props.theme.fonts_archivo.secondaryColor};
    font-family: ${props => props.theme.fonts_archivo.strong};
`;
