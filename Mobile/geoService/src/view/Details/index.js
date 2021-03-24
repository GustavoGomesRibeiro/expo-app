import React, { useEffect, useState, useContext } from "react";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { Contextapi } from "../../hooks/authContext";
import { Linking } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import { PROVIDER_GOOGLE } from "react-native-maps";

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

  const [services, setServices] = useState([]);
  const [establishments, setEstablishments] = useState();
  const [images, setImages] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  const [favorite, setFavorite] = useState([]);
  // const [isLoading, setLoading] = useState(false);

  const params = route.params;

  const message = `Olá ${params.name}, te encontrei pelo aplicativo geoService e gostaria de avaliar o valor dos serviços disponiveis.`;

  useEffect(() => {
    async function loadEstablishment() {
      const response = await api.get(`/company/${params.id}`, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      setEstablishments(response.data);
    }
    loadEstablishment();

    const interval = setInterval(() => {
      async function loadImages() {
        const response = await api.get(`/images`, {
          headers: {
            Token: `Bearer ${token}`,
          },
        });
        setImages(response.data);
      }
      loadImages();

      async function loadServices() {
        const response = await api.get(`/services`, {
          headers: {
            Token: `Bearer ${token}`,
            Authorization: params.id,
          },
        });
        setServices(response.data);
      }
      loadServices();
    }, 1000);
    return () => clearInterval(interval);
  }, [params.id]);

  useEffect(() => {
    api
      .get(`/favoriteEstablishments`, {
        headers: {
          Token: `Bearer ${token}`,
          Authorization: params.id,
        },
      })
      .then((response) => {
        setIsFavorite(response.data);
      });
  }, [favorite]);

  if (!establishments) {
    // return <Title>Carregando...</Title>;
    return (
      <AnimatedLoader
        // visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../../assets/loader.json")}
        animationStyle={{ width: 100, height: 100 }}
        speed={1}
      />
    );
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
    const response = await api.post(
      "/favoriteEstablishments",
      {
        user_id: user.id,
        company_id: params.id,
      },
      {
        headers: {
          Token: `Bearer ${token}`,
        },
      }
    );
    setFavorite(response.data);
  }

  async function handleDeleteToFavorites(id) {
    await api.delete(`/favoriteEstablishments/${id}`, {
      headers: {
        Token: `Bearer ${token}`,
        Authorization: params.id,
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
                  {images.map((image) => {
                    return (
                      <Image key={image.id} source={{ uri: image.path }} />
                    );
                  })}
                </ScrollViewHorizontal>
              </ImageContainer>

              <DetailsContainer>
                <Title>{establishment.name}</Title>
                <Description>
                  Estabelecimento de teste, fazendo os ajustes ainda
                </Description>
                <MapContainer>
                  <Map
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                      latitude: Number(establishment.latitude),
                      longitude: Number(establishment.longitude),
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
                        latitude: Number(establishment.latitude),
                        longitude: Number(establishment.longitude),
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
              <Footer>
                <ContainerButtons>
                  {isFavorite.length ? (
                    isFavorite.map((item) => {
                      return (
                        <ButtonUnFavorite
                          onPress={() => handleDeleteToFavorites(item.id)}
                          key={item.id}
                        >
                          <Ionicons
                            name="md-heart-dislike"
                            size={24}
                            color="#fff"
                          />
                        </ButtonUnFavorite>
                      );
                    })
                  ) : (
                    <ButtonFavorite onPress={handleAddToFavorites}>
                      <FontAwesome name="heart" size={24} color="#fff" />
                    </ButtonFavorite>
                  )}
                  <ButtonWhatsApp onPress={sendWhatsapp}>
                    <FontAwesome name="whatsapp" size={24} color="#FFF" />
                    <Contact>Entrar em contato</Contact>
                  </ButtonWhatsApp>
                </ContainerButtons>
              </Footer>
            </Content>
          );
        })}
      </ScrollView>
    </Container>
  );
}
