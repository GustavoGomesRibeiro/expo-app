import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Contextapi } from "../../../hooks/authContext";

import {
  Container,
  Icon,
  Name,
  Title,
  Footer,
  ButtonForgot,
  Forgot,
} from "./styled-components";

export default function Login({ navigation }) {
  const { signInUser } = useContext(Contextapi);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const [focused, setFocused] = useState(false);

  // const handleFocused = useCallback( () => {
  //     setFocused(true);
  // }, []);

  function handleSubmit() {
    signInUser({
      username: username,
      password: password,
    });
    // navigation.navigate('MainPage');
  }

  return (
    <Container>
      <Icon>
        <AntDesign
          name="arrowleft"
          size={20}
          onPress={() => navigation.navigate("Signin")}
        />
      </Icon>

      <Name>
        <Title>GeoService</Title>
      </Name>
      <Input
        name="username"
        value={username}
        onChangeText={setUsername}
        icon="user"
        placeholder="Usuario"
        autoCapitalize="none"
      />
      <Input
        name="password"
        value={password}
        onChangeText={setPassword}
        icon="lock"
        placeholder="Senha"
        secureTextEntry={true}
      />

      <Button onPress={handleSubmit}> Entrar </Button>
      <Footer>
        <ButtonForgot>
          <Forgot onPress={() => navigation.navigate("ForgotPassword")}>
            {" "}
            Esqueci minha senha{" "}
          </Forgot>
        </ButtonForgot>
      </Footer>
    </Container>
  );
}
