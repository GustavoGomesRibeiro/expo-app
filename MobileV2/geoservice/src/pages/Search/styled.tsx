import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RectButton } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";

const Container = styled.View`
  flex: 1;
  background-color: ${ props => props.theme.backgroundDefault.backgroundColor};
`;

const Header = styled.View`
  position: absolute;
  bottom: ${RFPercentage(85)}px;
  padding: ${RFPercentage(3)}px;
  flex-direction: row;
`;

const SearchTextInput = styled.TextInput`
  flex: 1;
  height: 45px;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0px 20px;
  font-size: ${RFPercentage(2.2)}px;
  font-weight: bold;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: {
    width: 4px;
    height: 4px;
  }
  elevation: 3;
`;

const Map = styled(MapView)`
  flex: 1;
`;

const Button = styled(RectButton)`
  width: 45px;
  height: 45px;
  background-color: #1C1C1E;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export {Container, Map, Header, SearchTextInput, Button}