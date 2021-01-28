import styled from "styled-components/native";
import MapView from "react-native-maps";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView``;

export const Content = styled.View``;

export const ImageContainer = styled.View``;

export const ScrollViewHorizontal = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  pagingEnabled: true,
}))`
  /* background: #000; */
`;

export const Image = styled.Image`
  width: 500px;
  height: 240px;
  resize-mode: cover;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;
export const Title = styled.Text`
  color: #000;
  font-size: 30px;
  font-family: "Archivo_700Bold";
`;

export const AddService = styled.TouchableOpacity`
  /* margin-top: 16px;
  flex-direction: row; */
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Description = styled.Text`
  font-family: "Archivo_400Regular";
  color: #000;
  line-height: 24px;
  margin-top: 16px;
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
  background-color: #e6f7fb;
  border-width: 1px;
  border-color: #b3dae2;
  border-radius: 20px;
  padding: 20px;
`;
export const ScheduleItemGreen = styled.View`
  background-color: #edfff6;
  border-width: 1px;
  border-color: #a1e9c5;
  border-radius: 20px;
  padding: 20px;
`;

export const ScheduleItemRed = styled.View`
  background-color: #fef6f9;
  border-width: 1px;
  border-color: #ffbcd4;
  border-radius: 20px;
  padding: 20px;
`;

export const ScheduleTextBlue = styled.Text`
  font-family: "Archivo_400Regular";
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color: #5c8599;
`;

export const ScheduleTextGreen = styled.Text`
  font-family: "Archivo_400Regular";
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color: #37c77f;
`;

export const ScheduleTextRed = styled.Text`
  font-family: "Archivo_400Regular";
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color: #ff669d;
`;

export const WhatsApp = styled(RectButton)`
  background-color: #3cdc8c;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin: 40px 0;
`;
export const Contact = styled.Text`
  font-family: "Archivo_700Bold";
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;
export const ContainerModal = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background: #fff;
  border-radius: 15px;
`;
export const ContainerButton = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;
export const AddModalServices = styled.TouchableOpacity`
  background: #000;
  width: 100px;
  height: 58px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const CloseModal = styled.TouchableOpacity`
  background: #000;
  width: 100px;
  height: 58px;
  border-radius: 15px;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
`;

export const TextTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: Archivo_700Bold;
`;

export const Style = styled.View`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #1bd163;
  margin-left: 15px;
`;
export const DescriptionService = styled.Text`
  font-family: "Archivo_400Regular";
  color: #000;
  line-height: 24px;
`;
