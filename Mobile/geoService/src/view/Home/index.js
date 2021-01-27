import React, { useContext } from "react";
import { Contextapi } from "../../hooks/authContext";
import { Image, ScrollView } from "react-native";
import {
  Container,
  Title,
  Context,
  Services,
  TypeServices,
  ButtonSignOut,
} from "./styles-components";

export default function Home() {
  const { signOut, user, establishment, token } = useContext(Contextapi);

  return (
    <Container>
      <Context>
        <Title>Home</Title>
        <ButtonSignOut title="sair" onPress={signOut} />
        <Services>
          <TypeServices></TypeServices>
          <ScrollView
            horizontal={true}
            showHorizontalScrollIndicator={false}
            pagingEnabled={true}
          >
            <Image
              style={{ width: 500, height: 240, resizeMode: "cover" }}
              source={{
                uri: "https://fmnova.com.br/images/noticias/safe_image.jpg",
              }}
            />
          </ScrollView>
        </Services>
      </Context>
    </Container>
  );
}
