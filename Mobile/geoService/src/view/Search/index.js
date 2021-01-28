import React, { useState, useEffect, useContext } from "react";
import { Contextapi } from "../../hooks/authContext";
import { useNavigation } from "@react-navigation/native";

import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import { MaterialIcons } from "@expo/vector-icons";
import api from "../../service/api";
import Headers from "../../components/Headers";
import { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { KeyboardAvoidingView } from "react-native";

import {
  Container,
  Map,
  CalloutContainer,
  CalloutTitle,
  Footer,
  FooterTextInput,
  FooterButton,
} from "./styled-components";

export default function Search({ navigation }) {
  const { user, token } = useContext(Contextapi);
  const navigationToResult = useNavigation();

  const [establishments, setEstablishments] = useState([]);
  const [service, setService] = useState("");
  const [serviceFiltered, setServiceFiltered] = useState([]);

  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        });
      }
    }
    loadInitialPosition();
  }, []);

  useEffect(() => {
    api
      .get("/company", {
        headers: {
          Token: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setEstablishments(response.data);
      });
  }, []);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  async function handleFilter() {
    const response = await api.get(`/search`, {
      headers: {
        Token: `Bearer ${token}`,
      },
      params: {
        service,
      },
    });

    setServiceFiltered(response.data);
    {
      serviceFiltered.map((service) => {
        navigationToResult.navigate("Result", {
          id: service.id,
          name: service.name,
          industry: service.industry,
          latitude: service.latitude,
          longitude: service.longitude,
          service: service.service,
          opening_hours: service.opening_hours,
          open_on_weekends: service.open_on_weekends,
          whatsapp: service.whatsapp,
        });
      });
    }
  }

  return (
    <Container>
      <Headers title="Localizar estabelecimentos" />
      <Map
        // provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        showsUserLocation
        loadingEnabled
      >
        {establishments.map((establishment) => {
          return (
            <Marker
              key={establishment.id}
              calloutAnchor={{
                x: 4.2,
                y: 0.8,
              }}
              coordinate={{
                latitude: establishment.latitude,
                longitude: establishment.longitude,
              }}
            >
              <Callout
                tooltip={true}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: establishment.id,
                    name: establishment.name,
                    whatsapp: establishment.whatsapp,
                    latitude: establishment.latitude,
                    longitude: establishment.longitude,
                  })
                }
              >
                <CalloutContainer>
                  <CalloutTitle> {establishment.name} </CalloutTitle>
                </CalloutContainer>
              </Callout>
            </Marker>
          );
        })}
      </Map>

      <KeyboardAvoidingView behavior="position">
        <Footer>
          <FooterTextInput
            placeholder="Buscar por estabelecimentos"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={service}
            onChangeText={setService}
          />
          <FooterButton onPress={handleFilter}>
            <MaterialIcons name="my-location" size={32} color="#FFF" />
          </FooterButton>
        </Footer>
      </KeyboardAvoidingView>
    </Container>
  );
}
