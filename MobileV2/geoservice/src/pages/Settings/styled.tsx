import styled from 'styled-components/native';
import { Switch } from 'react-native';

const Container = styled.ScrollView`
  flex: 1;
`;

const MainContainer = styled.View``;

const Content = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const ContainerTitle = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
    font-family: ${props => props.theme.fonts_poppins.strong};
    font-size: 24px;
    color: ${props => props.theme.fonts_poppins.primaryColor};
`;

const Description = styled.View`
  padding-left: 10px;
`;

const Label = styled.Text`
  color:#A9A9A9;
`;

const Configs = styled.View`
    width: 350px;
    border-radius: 15px;
    background-color: #fff;
`;

const Text = styled.Text`
  font-family: ${props => props.theme.fonts_poppins.strong};
  font-size: 14px;
`;

const TextDelete = styled(Text)`
  color: #E65A59;
`;


const Icon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${props => props.theme.colorSetting.iconPrivacy};
  justify-content: center;
  align-items: center;
`;

const Theme = styled(Icon)`
    background-color: ${props => props.theme.colorSetting.iconTheme};
`;

const FeedBack = styled(Icon)`
    background-color: ${props => props.theme.colorSetting.iconFeedBack};
`;

const About = styled(Icon)`
    background-color: ${props => props.theme.colorSetting.iconAbout};
`;
const Account = styled(Icon)`
  background-color: #fff;
`;

const Btn = styled.TouchableOpacity`
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Divider = styled.View`
  height: 350px;
  height: 1px;
  background-color: #F0F0F0;
`;

const SwitchTheme = styled(Switch)`

`;

export { MainContainer, Container, Content, ContainerTitle, Title, Description, Label, Configs, Text, TextDelete, Icon, Theme, FeedBack, About, Account, Btn, Item, Divider, SwitchTheme}