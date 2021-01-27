import React, { useState, useEffect, useContext } from "react";
import logo from "../../../assets/logo.png";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Alert } from "react-native";
import api from "../../../service/api";

import { Container, Image, Description, Title } from "./styled-components";

export default function RegisterUser({ navigation }) {
  // const { registerUser } = useContext(Contextapi);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  handleRegister = async () => {
    if (!email || !username || !password) {
      Alert.alert("Informações Inválidas", "Os campos não podem ficar vazios!");
    } else {
      try {
        const response = await api.post("/users", {
          email,
          username,
          password,
        });

        navigation.navigate("Login");
      } catch (error) {
        Alert.alert(
          "Erro ao registrar",
          "Ops algo deu errado. Tente novamente!"
        );
      }
    }
  };

  return (
    <Container>
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
      {/* <Input value={latitude} keyboardType="numeric" onChangeText={setLatitude} name='latitude' icon="map-pin" placeholder='Latitude'/>
            <Input value={longitude} keyboardType="numeric" onChangeText={setLongitude} name='longitude' icon="map-pin" placeholder='Longitude'/> */}

      <Button onPress={handleRegister}> Cadastrar </Button>
    </Container>
  );
}
