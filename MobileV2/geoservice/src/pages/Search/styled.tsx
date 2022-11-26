import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RectButton } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  background-color: ${ props => props.theme.backgroundDefault.backgroundColor};
`;

const Header = styled.View`
  position: absolute;
  bottom: 700px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

const SearchTextInput = styled.TextInput`
  flex: 1;
  height: 55px;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  padding: 20px;
  font-size: 16px;
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
  width: 50px;
  height: 50px;
  background-color: #fc6963;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export {Container, Map, Header, SearchTextInput, Button}