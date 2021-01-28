import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import MapView from "react-native-maps";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f0f0f7;
`;

export const Context = styled.ScrollView`
  margin-top: -100px;
  padding: 16px;
`;
export const ContainerMain = styled.View`
  background-color: #fafafc;
  margin-top: 15px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const Title = styled.Text`
  color: #fff;
`;
export const ProfileFavorited = styled.View`
  background-color: #fafafc;
  /* background-color: #ccc; */
  flex-direction: row;
  padding: 24px;
  margin-top: 20px;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const ProfileFavoritedInfo = styled.View`
  margin-left: 16px;
`;
export const TextName = styled.Text`
  font-family: "Archivo_700Bold";
  color: #000;
  line-height: 24px;
  font-size: 20px;
  margin-left: 15px;
`;
export const ContainerService = styled.View`
  flex-direction: row;
`;
export const Style = styled.View`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #1bd163;
  margin-left: 15px;
  margin-top: 15px;
`;
export const TextServices = styled.Text`
  font-family: "Archivo_400Regular";
  color: #000;
  line-height: 24px;
  font-size: 16px;
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
`;
export const ContainerButtons = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;
export const ButtonFavorite = styled(RectButton)`
  background-color: #e33d3d;
  flex: 1;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
export const ButtonWhatsApp = styled(RectButton)`
  background-color: #04d361;
  flex: 1;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  /* margin-right: 8px; */
`;
export const Contact = styled.Text`
  font-family: "Archivo_700Bold";
  color: #fff;
  font-size: 16px;
  margin-left: 5px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #b3dae2;
  margin-top: 40px;
  background-color: #e6f7fb;
`;
export const Map = styled(MapView)`
  width: 100%;
  height: 150px;
`;

export const RoutesContainer = styled(RectButton)`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text`
  font-family: "Archivo_700Bold";
  color: #000;
`;
