import React, { useState } from "react";
import CustomHeader from "../../components/CustomHeader";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Marker } from "react-native-maps";

import { useRoute } from "@react-navigation/native";

import {
  Container,
  Context,
  ContainerMain,
  ProfileFavorited,
  Image,
  ProfileFavoritedInfo,
  TextName,
  ContainerService,
  Style,
  TextServices,
  Footer,
  ContainerButtons,
  ButtonFavorite,
  ButtonWhatsApp,
  Contact,
  MapContainer,
  Map,
  RoutesContainer,
  RoutesText,
} from "./styled-components";

export default function Result() {
  const route = useRoute();
  const params = route.params;
  const [establishments, setEstablishments] = useState([params]);

  return (
    <Container>
      <CustomHeader title="Resultada da seu Busca" />
      <Context>
        {establishments.map((establishment) => {
          return (
            <ContainerMain key={establishment.id}>
              <ProfileFavorited>
                <Image
                  source={{
                    uri: "https://fmnova.com.br/images/noticias/safe_image.jpg",
                  }}
                />

                <ProfileFavoritedInfo>
                  <TextName> {establishment.name} </TextName>
                  <ContainerService>
                    <Style>
                      <TextServices>{establishment.service}</TextServices>
                    </Style>
                  </ContainerService>
                </ProfileFavoritedInfo>
              </ProfileFavorited>

              <MapContainer>
                <Map
                  // provider={PROVIDER_GOOGLE}
                  initialRegion={{
                    latitude: establishment.latitude,
                    longitude: establishment.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                  }}
                  zoomEnabled={false}
                  pitchEnabled={false}
                  scrollEnabled={false}
                  rotateEnabled={false}
                >
                  <Marker
                    coordinate={{
                      latitude: establishment.latitude,
                      longitude: establishment.longitude,
                    }}
                  />
                </Map>

                <RoutesContainer
                  onPress={() => handleOnPressGoogleMaps(establishment)}
                >
                  <RoutesText> Ver Rota no Google Maps</RoutesText>
                </RoutesContainer>
              </MapContainer>

              <Footer>
                <ContainerButtons>
                  <ButtonFavorite
                    onPress={() => handleRemoveFavorite(establishment.id)}
                  >
                    <Ionicons name="md-heart-dislike" size={24} color="#fff" />
                  </ButtonFavorite>

                  <ButtonWhatsApp
                    onPress={() => handleSendWhatsApp(establishment)}
                  >
                    <FontAwesome name="whatsapp" size={24} color="#FFF" />
                    <Contact>Entrar em contato</Contact>
                  </ButtonWhatsApp>
                </ContainerButtons>
              </Footer>
            </ContainerMain>
          );
        })}
      </Context>
    </Container>
  );
}
