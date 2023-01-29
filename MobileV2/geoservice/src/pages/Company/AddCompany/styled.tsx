import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.backgroundDefault.backgroundColor};
`;

const Map = styled(MapView)`
  flex: 1;
`;

const ButtonContainer = styled.View``;

const NextButton = styled.TouchableHighlight`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: ${RFPercentage(70)}px;
  z-index: 5;

  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 54px;
  background-color: #1C1C1E;
`;

const TextButton = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: 'Archivo_700Bold';
  color: ${props => props.theme.fonts_archivo.secondaryColor};
`;

export {Container, Map, ButtonContainer, NextButton, TextButton} 
