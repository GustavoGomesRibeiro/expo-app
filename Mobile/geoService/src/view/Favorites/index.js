import React, { useState, useEffect, useContext } from "react";
import CustomHeader from "../../components/CustomHeader";
import { FontAwesome } from "@expo/vector-icons";
import { Marker } from "react-native-maps";
import { Contextapi } from "../../hooks/authContext";
import { Linking } from "react-native";
import api from "../../service/api";

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
} from "./styles-components";

export default function Favorites() {
  const { token, user } = useContext(Contextapi);

  const [establishments, setEstablishments] = useState([]);

  const message = `Olá ${establishments.name}, gostaria de avaliar o valor dos serviços, msg teste`;

  useEffect(() => {
    api
      .get(`/favoriteEstablishments`, {
        headers: {
          Token: `Bearer ${token}`,
          Authorization: user.id,
        },
      })
      .then((response) => {
        setEstablishments(response.data);
      });
  }, []);

  console.log(establishments.user_id, "wpp");
  console.log(establishments, "carregando establecimentos");

  function handleOnPressGoogleMaps() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${establishments?.latitude},${establishments?.longitude}`
    );
  }

  function handleSendWhatsApp() {
    Linking.canOpenURL(
      `whatsapp://send?phone=55${establishments.whatsapp}&text=${message}`
    ).then((supported) => {
      if (supported) {
        return `whatsapp://send?phone=55${establishments.whatsapp}&text=${message}`;
      } else {
        return Linking.openURL(
          `https://api.whatsapp.com/send?phone=55${establishments.whatsapp}&text=${message}`
        );
      }
    });
  }
  return (
    <Container>
      <CustomHeader title="Favoritos" />
      <Context>
        {establishments.user_id === 1 ? (
          establishments.map((establishment) => {
            return (
              <ContainerMain key={establishment.id}>
                <ProfileFavorited>
                  <Image
                    source={{
                      uri:
                        "https://fmnova.com.br/images/noticias/safe_image.jpg",
                    }}
                  />

                  <ProfileFavoritedInfo>
                    <TextName> {establishment.name} </TextName>
                    <ContainerService>
                      <Style>
                        <TextServices>Mecanico</TextServices>
                      </Style>
                      <Style>
                        <TextServices>Mecanico de moto</TextServices>
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

                  <RoutesContainer onPress={handleOnPressGoogleMaps}>
                    <RoutesText> Ver Rota no Google Maps</RoutesText>
                  </RoutesContainer>
                </MapContainer>

                <Footer>
                  <ContainerButtons>
                    <ButtonFavorite onPress={() => {}}>
                      <FontAwesome name="heart-o" size={24} color="#fff" />
                    </ButtonFavorite>

                    <ButtonWhatsApp onPress={handleSendWhatsApp}>
                      <FontAwesome name="whatsapp" size={24} color="#FFF" />
                      <Contact>Entrar em contato</Contact>
                    </ButtonWhatsApp>
                  </ContainerButtons>
                </Footer>
              </ContainerMain>
            );
          })
        ) : (
          <Footer>
            <ContainerButtons>
              <ButtonFavorite onPress={() => {}}>
                <FontAwesome name="heart-o" size={24} color="#fff" />
              </ButtonFavorite>

              <ButtonWhatsApp onPress={handleSendWhatsApp}>
                <FontAwesome name="whatsapp" size={24} color="#FFF" />
                <Contact>Entrar em contato</Contact>
              </ButtonWhatsApp>
            </ContainerButtons>
          </Footer>
        )}
      </Context>
    </Container>
  );
}
