import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { AntDesign } from "@expo/vector-icons";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Alert } from "react-native";
import {
  Container,
  Icon,
  Image,
  Description,
  Title,
} from "./styled-components";
import api from "../../../service/api";

export default function RegisterEstablishment({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  handleRegister = async () => {
    if (!email || !username || !password) {
      Alert.alert("Informações Inválidas", "Os campos não podem ficar vazios!");
    } else {
      try {
        const response = await api.post("/establishments", {
          email,
          username,
          password,
        });

        navigation.navigate("LoginEstablishment");
      } catch (error) {
        "Erro ao registrar", "Ops algo deu errado. Tente novamente!";
      }
    }
  };

  return (
    <Container>
      <Icon>
        <AntDesign
          name="arrowleft"
          size={20}
          onPress={() => navigation.navigate("Signin")}
        />
      </Icon>

      <Image source={logo} />

      <Description>
        <Title> Crie sua conta </Title>
      </Description>

      <Input
        value={email}
        onChangeText={setEmail}
        name="email"
        icon="mail"
        placeholder="E-mail"
      />
      <Input
        value={username}
        onChangeText={setUsername}
        name="username"
        icon="user"
        placeholder="Username"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        name="password"
        icon="lock"
        placeholder="Senha"
        secureTextEntry={true}
      />

      <Button onPress={handleRegister}> Cadastrar </Button>
    </Container>
  );
}
