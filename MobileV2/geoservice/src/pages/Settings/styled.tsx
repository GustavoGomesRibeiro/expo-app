import styled from 'styled-components/native';
import { Switch } from 'react-native';

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${ props => props.theme.backgroundDefault.backgroundColor};
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
    color: ${props => props.theme.fonts_poppins.colorDefault};
`;

const Description = styled.View`
  padding-left: 10px;
`;

const Label = styled.Text`
  color:#A9A9A9;
  font-family: ${props => props.theme.fonts_poppins.regular};
  font-size: 12px;
`;

const Configs = styled.View`
    width: 350px;
    border-radius: 15px;
    background-color: ${props => props.theme.backgroundDefault.backgroundSettings};
`;

const Text = styled.Text`
  font-family: ${props => props.theme.fonts_poppins.strong};
  font-size: 14px;
  color: ${props => props.theme.fonts_poppins.colorDefault};
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
  background-color: ${props => props.theme.backgroundDefault.backgroundSettings};
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
  width: 350px;
  height: 1px;
  background-color: ${props => props.theme.colorSetting.divider};
`;

const SwitchTheme = styled(Switch)`

`;

export { MainContainer, Container, Content, ContainerTitle, Title, Description, Label, Configs, Text, TextDelete, Icon, Theme, FeedBack, About, Account, Btn, Item, Divider, SwitchTheme}