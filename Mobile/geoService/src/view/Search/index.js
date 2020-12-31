import React, { useState, useEffect, useContext } from "react";
import { Contextapi } from "../../hooks/authContext";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import api from "../../service/api";
// import * as Location from "expo-location";

import {
  Container,
  Map,
  CalloutContainer,
  CalloutTitle,
  Footer,
  FooterTextInput,
  FooterButton,
} from "./styled-components";
import { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

export default function Search({ navigation }) {
  const { user, token } = useContext(Contextapi);
  console.log(user, token, "search");

  const [establishments, setEstablishments] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);

  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

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

  console.log(establishments);

  useEffect(() => {
    api
      .get("/newEstablishments", {
        headers: {
          Token: `Bearer ${token}`,
          // Authorization: user.id,
        },
      })
      .then((response) => {
        setEstablishments(response.data);
      });
  }, []);

  function handleRegionChanged(region) {
    console.log(region, "alteracao de lugar do mapa");
    setCurrentRegion(region);
  }

  return (
    <Container>
      <Map
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
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

      <Footer>
        <FooterTextInput
          placeholder="Buscar por estabelecimentos"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <FooterButton onPress={() => {}}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </FooterButton>
      </Footer>
    </Container>
  );
}
