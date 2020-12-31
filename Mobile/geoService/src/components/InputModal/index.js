import React from "react";
import { Container, TextInput, Icon } from "./styled-components";

const InputModal = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color="#fff" />
    <TextInput placeholderTextColor="#fff" {...rest} />
  </Container>
);

export default InputModal;
