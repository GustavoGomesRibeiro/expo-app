import React, { useState } from "react";
import Headers from "../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import { Marker } from "react-native-maps";
import { Container, Map, Footer, NextButton, Text } from "./styles-components";

export default function Add() {
  const navigation = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleNextStep() {
    navigation.navigate("Company", { position });
  }

  function handleSelectPostion(event) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <Container>
      <Headers title="Estabelecimentos" />
      <Map
        initialRegion={{
          latitude: -23.5442453,
          longitude: -46.7733957,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectPostion}
      >
        {position.latitude !== 0 && (
          <Marker
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </Map>

      <Footer>
        {position.latitude !== 0 && (
          <NextButton onPress={handleNextStep}>
            <Text> Próximo </Text>
          </NextButton>
        )}
      </Footer>
    </Container>
  );
}
