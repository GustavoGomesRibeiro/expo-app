import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView``;


export const ImageContainer = styled.View`
  height: 240px;
`;


export const ScrollViewHorizontal = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  pagingEnabled: true,
}))`
      background: #000;
`;

export const Image = styled.Image`
    width: 100%;
    height: 240px;
    resize-mode: cover;
`;

export const DetailsContainer = styled.View`
    padding: 24px
`;
export const Title = styled.Text`
    color: #000;
    font-size: 30px;
    font-family: 'Archivo_700Bold';
`;
export const Description = styled.Text`
    font-family: 'Archivo_400Regular';
    color: #000;
    line-height: 24px;
    margin-top: 16px;
`;
export const MapContainer = styled.View`
    border-radius: 20px;
    overflow: hidden;
    border-width: 1.2px;
    border-color: #B3DAE2;
    margin-top: 40px;
    background-color: #E6F7FB;
`;
export const Map = styled(MapView)`
    width: 100%;
    height: 150px;
`;

export const RoutesContainer = styled.View`
    padding: 16px;
    align-items: center;
    justify-content: center;

`;

export const RoutesText = styled.Text`
    font-family: 'Archivo_700Bold';
    color: #000;
`;

export const Divider = styled.View`
    height: 0.8px;
    width: 100%;
    background-color: #000;
    margin-vertical: 40px;
`;


export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ScheduleItem = styled.View`
  width: 48%;
  padding: 20px;
`;
export const ScheduleItemBlue = styled.View`
  background-color: #E6F7FB;
  border-width: 1px;
  border-color: #B3DAE2;
  border-radius: 20px;
  padding: 20px;
`;
export const ScheduleItemGreen = styled.View`
  background-color: #EDFFF6;
  border-width: 1px;
  border-color: #A1E9C5;
  border-radius: 20px;
  padding: 20px;
`;
export const ScheduleTextBlue = styled.Text`
  font-family: 'Archivo_400Regular';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color: #5C8599;
`;

export const ScheduleTextGreen = styled.Text`
  font-family: 'Archivo_400Regular';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color: #37C77F;
`;

export const WhatsApp = styled(RectButton)`  
  background-color: #3CDC8C;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin: 40px 0;
`;
export const Contact = styled.Text`  
  font-family: 'Archivo_700Bold';
  color: #FFF;
  font-size: 16px;
  margin-left: 16px;
`;

