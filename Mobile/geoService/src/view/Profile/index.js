import React, { useState, useEffect, useContext } from "react";
import { Contextapi } from "../../hooks/authContext";
import api from "../../service/api";
import Headers from "../../components/Headers";
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
} from "./styled-components";

export default function Profile({ navigation }) {
  const { token, establishment } = useContext(Contextapi);

  const [establishments, setEstablishments] = useState([]);
  const [services, setServices] = useState([]);

  const image = { uri: "https://fmnova.com.br/images/noticias/safe_image.jpg" };

  useEffect(() => {
    api
      .get(`/listEstablishments`, {
        headers: {
          Token: `Bearer ${token}`,
          Authorization: establishment.id,
        },
      })
      .then((response) => {
        setEstablishments(response.data);
      });
  }, []);

  // useEffect(() => {
  //   api
  //     .get(`/services`, {
  //       headers: {
  //         Token: `Bearer ${token}`,
  //         Authorization: establishment.id,
  //       },
  //     })
  //     .then((response) => {
  //       setServices(response.data);
  //     });
  // }, []);

  return (
    <Container>
      <Context>
        <Headers title="Perfil" />
        {establishments.length ? (
          <Title>Seu Estabelecimento </Title>
        ) : (
          <Title>Seus Estabelecimentos</Title>
        )}
        <Content>
          {establishments.map((establishment) => {
            return (
              <ProfileContainer key={establishment.id}>
                {/* <Image>
                  <Img
                    source={{
                      uri:
                        "https://fmnova.com.br/images/noticias/safe_image.jpg",
                    }}
                  />
                </Image> */}
                <ButtonDetails
                  onPress={() =>
                    navigation.navigate("NewServices", {
                      id: establishment.id,
                      name: establishment.name,
                      whatsapp: establishment.whatsapp,
                      latitude: establishment.latitude,
                      longitude: establishment.longitude,
                      company_id: establishment.company_id,
                      service: establishment.service,
                    })
                  }
                >
                  <ContentEstablishment>
                    <ImageBackground source={image}>
                      <Establishment>{establishment.name}</Establishment>
                    </ImageBackground>
                  </ContentEstablishment>
                </ButtonDetails>
              </ProfileContainer>
            );
          })}
        </Content>
      </Context>
    </Container>
  );
}
