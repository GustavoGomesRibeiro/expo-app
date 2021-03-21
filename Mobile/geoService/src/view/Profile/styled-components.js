import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f0f0f7;
`;

export const Context = styled.ScrollView`
  margin-top: -150px;
  padding: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  margin-top: 24px;
  font-size: 24px;
  line-height: 26px;
  font-family: Poppins_600SemiBold;
  max-width: 340px;
  margin-left: 30px;
  /* margin-vertical: 100px; */
`;
export const Services = styled.View``;
export const TypeServices = styled.View``;
export const Content = styled.View`
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
`;
export const ProfileContainer = styled.View``;

export const ButtonDetails = styled.TouchableOpacity``;

export const ContentEstablishment = styled.View`
  width: 350px;
  height: 190px;
  border-radius: 15px;
  background: #fff;
  margin-top: 25px;
  flex-direction: row;
  padding: 24px;
`;

export const ImageBackground = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Establishment = styled.Text`
  color: #000;
  font-size: 26px;
  line-height: 30px;
  font-family: Poppins_600SemiBold;
  padding-left: 15px;
`;

export const DetailsEstablishment = styled.View``;

export const Style = styled.View`
  padding: 5px 15px;
  flex-direction: row;
`;
export const Clock = styled.Text`
  color: #000;
  font-size: 14px;
  /* line-height: 30px; */
  font-family: Poppins_600SemiBold;
  padding-left: 15px;
`;

export const ImageProfile = styled.View`
  align-items: center;
`;
export const ProfileImg = styled.Image`
  width: 500px;
  resize-mode: contain;
  margin-top: -120px;
`;
export const MessageProfile = styled.Text`
  margin-top: -100px;
  color: #000;
  font-size: 32px;
  font-family: "Archivo_400Regular";
  line-height: 37px;
`;

export const Bold = styled.Text`
  color: #000;
  font-family: "Archivo_700Bold";
  line-height: 37px;
`;
