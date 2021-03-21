import React, { useState, useEffect, useContext } from "react";
import { Contextapi } from "../../hooks/authContext";
import api from "../../service/api";
import CustomHeader from "../../components/CustomHeader";
import { FontAwesome, Feather } from "react-native-vector-icons";
import profile from "../../assets/profile.png";

import {
  Container,
  Title,
  Context,
  Content,
  ProfileContainer,
  ImageBackground,
  Image,
  Img,
  ButtonDetails,
  ContentEstablishment,
  Establishment,
  DetailsEstablishment,
  Style,
  Clock,
  Services,
  ImageProfile,
  ProfileImg,
  MessageProfile,
  Bold,
} from "./styled-components";

export default function Profile({ navigation }) {
  const { token, establishment } = useContext(Contextapi);

  const [establishments, setEstablishments] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadEstablishment() {
      const response = await api.get(`/listEstablishments`, {
        headers: {
          Token: `Bearer ${token}`,
          Authorization: establishment.id,
        },
      });
      setEstablishments(response.data);
    }

    loadEstablishment();

    async function loadImages() {
      const response = await api.get(`/images`, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      setImages(response.data);
    }
    loadImages();
  }, []);

  return (
    <Container>
      <CustomHeader title="Perfil" />
      <Context>
        {establishments.length ? (
          <Title>Seus Estabelecimentos </Title>
        ) : (
          <Title></Title>
        )}
        <Content>
          {images.length ? (
            images.map((establishment) => {
              return (
                <ProfileContainer key={establishment.id}>
                  <ButtonDetails
                    onPress={() =>
                      navigation.navigate("NewServices", {
                        id: establishment.id,
                        name: establishment.name,
                        whatsapp: establishment.whatsapp,
                        latitude: establishment.latitude,
                        longitude: establishment.longitude,
                        company_id: establishment.company_id,
                      })
                    }
                  >
                    <ContentEstablishment>
                      <ImageBackground
                        source={{ uri: establishment.path }}
                      ></ImageBackground>

                      <DetailsEstablishment>
                        <Establishment>{establishment.name}</Establishment>
                        <Style>
                          <FontAwesome
                            name="calendar-o"
                            size={20}
                            color="#000"
                          />
                          <Clock>
                            {establishment.open_on_weekends == "true"
                              ? "Atendemos final de senama"
                              : "Não atendemos \n final de semana"}
                          </Clock>
                        </Style>
                        <Style>
                          <Feather name="clock" size={20} color="#000" />
                          <Clock>{establishment.opening_hours}</Clock>
                        </Style>
                      </DetailsEstablishment>
                    </ContentEstablishment>
                  </ButtonDetails>
                </ProfileContainer>
              );
            })
          ) : (
            <ImageProfile>
              <ProfileImg source={profile} />
              <MessageProfile>
                Você não possui <Bold>estabelecimento</Bold> cadastrado.
              </MessageProfile>
            </ImageProfile>
          )}
        </Content>
      </Context>
    </Container>
  );
}
