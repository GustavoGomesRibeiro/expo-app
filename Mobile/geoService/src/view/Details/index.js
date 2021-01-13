import React, { useEffect, useState, useContext } from "react";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { Contextapi } from "../../hooks/authContext";
import { Linking } from "react-native";

import api from "../../service/api";
import Headers from "../../components/Headers";

import {
  ScrollView,
  Container,
  Content,
  ImageContainer,
  ScrollViewHorizontal,
  Image,
  DetailsContainer,
  Title,
  AddService,
  Style,
  DescriptionService,
  Description,
  MapContainer,
  Map,
  RoutesContainer,
  RoutesText,
  Divider,
  ScheduleContainer,
  ScheduleItem,
  ScheduleTextBlue,
  ScheduleTextGreen,
  ScheduleTextRed,
  ScheduleItemBlue,
  ScheduleItemGreen,
  ScheduleItemRed,
  Footer,
  ContainerButtons,
  Switch,
  ButtonFavorite,
  ButtonUnFavorite,
  ButtonWhatsApp,
  WhatsApp,
  Contact,
} from "./styled-components";

export default function Details() {
  const { token, user } = useContext(Contextapi);
  const route = useRoute();

  const [services, setServices] = useState();
  const [establishments, setEstablishments] = useState();
  const [isFavorite, setIsFavorite] = useState([]);
  const [favorite, setFavorite] = useState(true);
  const params = route.params;

  const message = `Olá ${params.name}, gostaria de avaliar o valor dos serviços, msg teste`;

  useEffect(() => {
    async function loadServices() {
      const response = await api.get("/services", {
        headers: {
          Token: `Bearer ${token}`,
          Authorization: user.id,
        },
      });
      setServices(response.data);
    }
    loadServices();

    async function loadEstablishment() {
      const response = await api.get(`/newEstablishments/${params.id}`, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      setEstablishments(response.data);
    }
    loadEstablishment();

    async function loadFavorites() {
      const response = await api.get(`/favoriteEstablishments`, {
        headers: {
          Token: `Bearer ${token}`,
          Authorization: user.id,
        },
      });
      setIsFavorite(response.data);
    }
    loadFavorites();
  }, [params.id, isFavorite]);

  if (!establishments) {
    return <Title>Carregando...</Title>;
  }

  function handleOnPressGoogleMaps() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${params?.latitude},${params?.longitude}`
    );
  }

  function sendWhatsapp() {
    Linking.canOpenURL(
      `whatsapp://send?phone=55${params.whatsapp}&text=${message}`
    ).then((supported) => {
      if (supported) {
        return `whatsapp://send?phone=55${params.whatsapp}&text=${message}`;
      } else {
        return Linking.openURL(
          `https://api.whatsapp.com/send?phone=55${params.whatsapp}&text=${message}`
        );
      }
    });
  }

  async function handleAddToFavorites() {
    await api.post(
      "/favoriteEstablishments",
      { favorite },
      {
        headers: {
          Token: `Bearer ${token}`,
          Authorization: user.id,
        },
      }
    );
  }

  async function handleDeleteToFavorites(id) {
    await api.delete(`/favoriteEstablishments/${id}`, {
      headers: {
        Token: `Bearer ${token}`,
        Authorization: user.id,
      },
    });
    setIsFavorite(isFavorite.filter((item) => item.id !== id));
  }

  return (
    <Container>
      <ScrollView>
        <Headers title="Detalhes do Estabelecimento" />
        {establishments.map((establishment) => {
          return (
            <Content key={establishment.id}>
              <ImageContainer>
                <ScrollViewHorizontal>
                  <Image
                    source={{
                      uri:
                        "https://fmnova.com.br/images/noticias/safe_image.jpg",
                    }}
                  />
                </ScrollViewHorizontal>
              </ImageContainer>

              <DetailsContainer>
                <Title>{establishment.name}</Title>
                <Description>
                  Estabelecimento de teste, fazendo os ajustes ainda
                </Description>
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
              </DetailsContainer>

              <Divider />

              <DetailsContainer>
                <Title>Nossos Serviços</Title>
                <AddService>
                  {services.length ? (
                    services.map((item) => {
                      return (
                        <Style key={item.id}>
                          <DescriptionService>
                            {item.service}
                          </DescriptionService>
                        </Style>
                      );
                    })
                  ) : (
                    <Description>Sem serviços cadastrados</Description>
                  )}
                </AddService>
              </DetailsContainer>

              <ScheduleContainer>
                <ScheduleItem>
                  <ScheduleItemBlue>
                    <Feather name="clock" size={40} color="#2AB5D1" />
                    <ScheduleTextBlue>
                      {establishment.opening_hours}
                    </ScheduleTextBlue>
                  </ScheduleItemBlue>
                </ScheduleItem>

                {establishment.open_on_weekends === "true" ? (
                  <ScheduleItem>
                    <ScheduleItemGreen>
                      <Feather name="info" size={40} color="#39CC83" />
                      <ScheduleTextGreen>
                        Atendemos fim de semana
                      </ScheduleTextGreen>
                    </ScheduleItemGreen>
                  </ScheduleItem>
                ) : (
                  <ScheduleItem>
                    <ScheduleItemRed>
                      <Feather name="info" size={40} color="#FF669D" />
                      <ScheduleTextRed>
                        Não Atendemos fim de semana
                      </ScheduleTextRed>
                    </ScheduleItemRed>
                  </ScheduleItem>
                )}
              </ScheduleContainer>
            </Content>
          );
        })}

        <Footer>
          <ContainerButtons>
            {isFavorite.length ? (
              isFavorite.reduce((item) => {
                return (
                  <Switch
                    thumbColor="#fff"
                    trackColor={{ false: "#ccc", true: "#39CC83" }}
                    value={favorite}
                    onPress={setFavorite}
                    // favorited={}
                  >
                    <ButtonUnFavorite
                      onPress={() => handleDeleteToFavorites(item.id)}
                    >
                      <Ionicons
                        name="md-heart-dislike"
                        size={24}
                        color="#fff"
                      />
                    </ButtonUnFavorite>
                  </Switch>
                );
              })
            ) : (
              <Switch
                thumbColor="#fff"
                trackColor={{ false: "#ccc", true: "#39CC83" }}
                value={favorite}
                onPress={setFavorite}
                // favorited={}
              >
                <ButtonFavorite onPress={handleAddToFavorites}>
                  <FontAwesome name="heart" size={24} color="#fff" />
                </ButtonFavorite>
              </Switch>
            )}

            <ButtonWhatsApp onPress={sendWhatsapp}>
              <FontAwesome name="whatsapp" size={24} color="#FFF" />
              <Contact>Entrar em contato</Contact>
            </ButtonWhatsApp>
          </ContainerButtons>
        </Footer>
      </ScrollView>
    </Container>
  );
}
