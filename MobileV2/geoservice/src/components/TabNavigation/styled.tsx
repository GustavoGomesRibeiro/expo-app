import styled from 'styled-components/native';

const Text = styled.Text`
  position: absolute;
  top: 45px;
  bottom: 0px;
  height: 50px;
  color: ${props => props.theme.colorsDefault.primaryBackground};
`;

const Tab = styled.View`
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 50px;
    border-radius: 25px;
    elevation: 0px;
    shadow-opacity: 0px;
`;

export {Tab, Text}