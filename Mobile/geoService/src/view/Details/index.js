import React, { useEffect, useState, useContext } from "react";
import { Feather, FontAwesome, EvilIcons } from "@expo/vector-icons";
import { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { Contextapi } from "../../hooks/authContext";
import { Linking } from "react-native";

import api from "../../service/api";
import Headers from "../../components/Headers";

import {
  ScrollView,
  Container,
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
  ButtonFavorite,
  ButtonWhatsApp,
  WhatsApp,
  Contact,
} from "./styled-components";

export default function Details() {
  const { token } = useContext(Contextapi);
  const route = useRoute();

  const [services, setServices] = useState();
  const [establishments, setEstablishments] = useState();
  const params = route.params;

  const message = `Olá ${params.name}, gostaria de avaliar o valor dos serviços, msg teste`;

  useEffect(() => {
    api
      .get("/services", {
        headers: {
          Token: `Bearer ${token}`,
          Authorization: params.id,
        },
      })
      .then((response) => {
        setServices(response.data);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/newEstablishments/${params.id}`, {
        headers: {
          Token: `Bearer ${token}`,
          // Authorization: user.id,
        },
      })
      .then((response) => {
        setEstablishments(response.data);
      });
  }, [params.id]);

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

  return (
    <Container>
      <ScrollView>
        <Headers title="Detalhes do Estabelecimento" />
        {establishments.map((establishment) => {
          return (
            <>
              <ImageContainer key={establishment.id}>
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
                  {services.length !== 0 ? (
                    services.map((item) => {
                      return (
                        <Style>
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
            </>
          );
        })}

        <Footer>
          <ContainerButtons>
            <ButtonFavorite onPress={() => {}}>
              <FontAwesome name="heart-o" size={24} color="#fff" />
            </ButtonFavorite>

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
