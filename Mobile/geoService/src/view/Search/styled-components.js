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

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding-horizontal: 16px;
  background-color: 'rgba(255, 255, 255, 0.8)';
  border-radius: 16px;
  justify-content: center;
`;

export const CalloutTitle = styled.Text`
    color: #000;
    font-size: 14px;
`;

export const Footer = styled.View`
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        z-index: 5;
        flex-direction: row;
        height: 100px;
`;

export const FooterTextInput = styled.TextInput`
        flex: 1;
        height: 55px;
        background-color: #FFF;
        color: #333;
        border-radius: 25px;
        padding: 20px;
        font-size: 16px;
        font-weight: bold;
        shadow-color: #000;
        shadow-opacity: 0.2;
        shadow-offset: { width: 4px; height: 4px;};
        elevation: 3;
`;

export const FooterButton = styled(RectButton)`
        width: 50px;
        height: 50px;
        background-color: #fc6963;
        border-radius: 25px;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
`;

