import styled from 'styled-components/native';
import { Switch } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize'

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ScrollView = styled.ScrollView`
  padding: 0 20px;
`;

const Label = styled.Text`
  color: ${props => props.theme.fonts_poppins.primaryColor};
  font-family: 'Poppins_700Bold';
  font-size: ${RFPercentage(2)}px;
  margin: 8px 0px;
`;

const AddPhoto = styled.TouchableOpacity`
  border-style: dashed;
  border-color: #000;
  border-width: 1.4px;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const UploadPhotos = styled.View`
  flex-direction: row;
`;

const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  margin-bottom: 32px;
  margin-right: 8px;
  background: #ccc;
`;

const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const SwitchWeek = styled(Switch)``;

const Register = styled.TouchableOpacity`
  background-color: #000;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-family: "Archivo_700Bold";
  font-size: ${RFPercentage(2)}px;
`;

export {Container, ScrollView, Label, AddPhoto, UploadPhotos ,Image, SwitchContainer, SwitchWeek, Register, ButtonText}