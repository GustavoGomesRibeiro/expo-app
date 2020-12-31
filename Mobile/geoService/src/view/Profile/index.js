import React, { useState, useEffect, useContext } from "react";
import { Contextapi } from "../../hooks/authContext";
import api from "../../service/api";
import Headers from "../../components/Headers";
import {
  Container,
  Title,
  Context,
  Content,
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

  console.log(establishments);
  return (
    <Container>
      <Context>
        <Headers title="Perfil" />
        {establishments.length !== 1 ? (
          <Title>Seus Estabelecimentos </Title>
        ) : (
          <Title>Seu Estabelecimento</Title>
        )}
        <Content>
          {establishments.map((establishment) => {
            return (
              <>
                {/* <Image>
                  <Img
                    source={{
                      uri:
                        "https://fmnova.com.br/images/noticias/safe_image.jpg",
                    }}
                  />
                </Image> */}
                <ButtonDetails
                  key={establishment.id}
                  onPress={() =>
                    navigation.navigate("NewServices", {
                      id: establishment.id,
                      name: establishment.name,
                      whatsapp: establishment.whatsapp,
                      latitude: establishment.latitude,
                      longitude: establishment.longitude,
                    })
                  }
                >
                  <ContentEstablishment>
                    <ImageBackground source={image}>
                      <Establishment>{establishment.name}</Establishment>
                    </ImageBackground>
                  </ContentEstablishment>
                </ButtonDetails>
              </>
            );
          })}
        </Content>
      </Context>
    </Container>
  );
}
