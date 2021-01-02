import React from "react";
import { Header, Text } from "./styled-components";
import { BorderlessButton } from "react-native-gesture-handler";
import { FontAwesome5, Feather } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CustomHeader({ title, ...rest }) {
  const navigation = useNavigation();

  function handleGoBackToHomePage() {
    navigation.navigate("Home");
  }

  return (
    <Header>
      <BorderlessButton onPress={navigation.goBack}>
        <FontAwesome5 name="arrow-left" size={24} color="#fff" />
      </BorderlessButton>

      <Text> {title} </Text>

      <BorderlessButton onPress={handleGoBackToHomePage}>
        <Feather name="x" size={24} color="#fafafc" />
      </BorderlessButton>
    </Header>
  );
}
