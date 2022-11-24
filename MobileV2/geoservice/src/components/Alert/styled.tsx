import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 

const Container = styled.View`
    flex-direction: row;
`;

const Icon = styled(AntDesign)``;

const Success = styled.View`
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

const Error = styled.View`
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

const ContainerWhite = styled.View`
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


const Title = styled.Text`
    font-size: 18px;
    font-family: ${props => props.theme.fonts_poppins.strong};
`;

const Description = styled.Text`
    font-size: 12px;
    font-family: ${props => props.theme.fonts_poppins.regular};
`; 

const ModalAlert = styled.View`
    width: 300px;
    height: auto;
    border-radius: 10px;
    background: #fff;
    top: 290px;
    left: 50px;
    right: 50px;
    position: absolute;
    z-index: 1;
`;

const Content = styled.View`
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

const Alert = styled.View``;

const ContainerBtn = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const BtnConfirmation = styled.TouchableOpacity`
    width: 80px;
    height: 50px;
    margin: 10px;
    border-radius: 10px;
    background: #e7e7e7;
    justify-content: center;
    align-items: center;

`;

const Text = styled.Text``;

export {Container, Icon, Success, Error, ContainerWhite, Title, Description, ModalAlert, Content, Alert, ContainerBtn, BtnConfirmation, Text}