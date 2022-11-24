import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const MainContainer = styled.View``;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const ContainerLabel = styled.View`
  padding: 20px;
`;

export const Label = styled.Text`
    font-family: ${props => props.theme.fonts_poppins.strong};
    font-size: 24px;
    color: ${props => props.theme.fonts_poppins.primaryColor};
`;

export const Configs = styled.View`
    width: 350px;
    border-radius: 15px;
    background-color: #fff;
`;

export const Text = styled.Text`
  padding-left: 10px;
`;

export const Icon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #EF443A;
  /* background-color: #83769C; */
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.TouchableOpacity`
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  height: 350px;
  height: 1px;
  background-color: #F0F0F0;
`;