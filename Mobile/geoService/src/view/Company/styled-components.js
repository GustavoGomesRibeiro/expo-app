import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  padding: 20px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 24px;
  font-family: "Poppins_400Regular";
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-width: 0.8px;
  border-bottom-color: #000;
`;

export const Label = styled.Text`
  color: #000;
  font-family: "Poppins_400Regular";
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-width: 1.4px;
  border-color: #000;
  border-radius: 20px;
  height: 56px;
  padding-vertical: 18px;
  padding-horizontal: 24px;
  margin-bottom: 16px;
  text-align-vertical: top;
`;

export const Add = styled.TouchableOpacity`
  border-style: dashed;
  border-color: #000;
  border-width: 1.4px;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Switch = styled.Switch``;

export const Register = styled.TouchableOpacity`
  background-color: #000;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 32px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: "Archivo_700Bold";
  font-size: 16px;
`;

export const UploadImages = styled.View`
  flex-direction: row;
`;
export const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  margin-bottom: 32px;
  margin-right: 8px;
`;

export const PickerContainer = styled.View`
  /* height: 150px; */
`;
