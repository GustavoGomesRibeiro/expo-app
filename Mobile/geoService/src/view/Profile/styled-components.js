import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const Context = styled.ScrollView``;

export const Title = styled.Text`
  color: #fff;
  margin-top: 24px;
  font-size: 20px;
  line-height: 26px;
  font-family: Archivo_700Bold;
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
// export const Image = styled.View`
//   /* background: #ccc;
//   width: 100px;
//   height: 100px; */
// `;
// export const Img = styled.Image`
//   width: 100%;
//   height: 240px;
//   resize-mode: cover;
// `;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  resize-mode: cover;
`;
export const ButtonDetails = styled.TouchableOpacity``;
export const ContentEstablishment = styled.View`
  width: 350px;
  height: 190px;
  border-radius: 15px;
  background: #fff;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
export const Establishment = styled.Text`
  color: #fff;
  font-size: 26px;
  line-height: 30px;
  font-family: Poppins_600SemiBold;
  /* align-items: center; */
`;
