import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 

export const Container = styled.View`
    flex-direction: row;
`;

export const Icon = styled(AntDesign)``;

export const Success = styled.View`
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: #8bc34a;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;
`;

export const Error = styled.View`
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: #f44336;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;
`;

export const ContainerWhite = styled.View`
    justify-content: center;
    padding: 10px;
    background: #f4f4f4;
    width: 200px;
    height: 80px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 3;
`;


export const Title = styled.Text`
    font-size: 18px;
    font-family: ${props => props.theme.fonts_poppins.strong};
`;

export const Description = styled.Text`
    font-size: 12px;
    font-family: ${props => props.theme.fonts_poppins.regular};
`; 

export const ModalAlert = styled.View``;