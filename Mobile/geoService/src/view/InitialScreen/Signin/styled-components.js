import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
`;
export const Image = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Descriptions = styled.View`
  justify-content: center;
  padding: 0 40px;
`;
export const Title = styled.Text`
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: Poppins_400Regular;
`;
export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
  font-size: 18px;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: center;
`;
export const User = styled.TouchableOpacity`
  width: 45%;
  height: 150px;
  border: 1px solid #000;
  border-radius: 10px;
  justify-content: space-between;
  padding: 24px;
  margin: 0 10px;
`;
export const Establishment = styled.TouchableOpacity`
  width: 45%;
  height: 150px;
  border: 1px solid #000;
  border-radius: 10px;
  justify-content: space-between;
  padding: 24px;
  margin: 0 10px;
  background: #000;
`;
export const Text = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 16px;
  color: #000;
`;
export const TextEstablishment = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 16px;
  color: #fff;
`;
