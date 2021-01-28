import React, { useState, useEffect, useContext } from "react";
import { Contextapi } from "../../hooks/authContext";
import api from "../../service/api";
import CustomHeader from "../../components/CustomHeader";
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

  // const image = { uri: "https://fmnova.com.br/images/noticias/safe_image.jpg" };

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
          {establishments.length ? (
            establishments.map((establishment) => {
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
                      {images.map((image) => {
                        return (
                          <ImageBackground
                            key={image.id}
                            source={{ uri: image.path }}
                          >
                            <Establishment>{establishment.name}</Establishment>
                          </ImageBackground>
                        );
                      })}
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
