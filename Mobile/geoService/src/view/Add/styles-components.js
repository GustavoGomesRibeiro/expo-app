import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const Map = styled(MapView)`
  flex: 1;
`;

export const Footer = styled.View``;

export const NextButton = styled(RectButton)`
    background-color: #000;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    height: 56px;

    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 40px;
  
`;

export const Text = styled.Text`
  font-family: 'Archivo_700Bold' ;
  font-size: 16px;
  color: #fff;
`;


