import React, { useState, useContext } from "react";
import { Contextapi } from "../../hooks/authContext";
import { Feather } from "@expo/vector-icons";
import Headers from "../../components/Headers";
import { useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import api from "../../service/api";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  ScrollView,
  Title,
  Label,
  Input,
  Add,
  SwitchContainer,
  Switch,
  Register,
  ButtonText,
  UploadImages,
  Image,
} from "./styled-components";

import { Alert } from "react-native";

export default function NewEstablishment() {
  const { token } = useContext(Contextapi);

  const route = useRoute();
  const params = route.params;
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [industry, setIndustry] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [openOnWeekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState([]);

  async function handleCreateEstablishment() {
    const { latitude, longitude } = params.position;
    const data = new FormData();

    data.append("name", name);
    data.append("whatsapp", whatsapp);
    data.append("industry", industry);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("openingHours", openingHours);
    data.append("openOnWeekends", String(openOnWeekends));

    images.forEach((image, index) => {
      data.append("images", {
        name: `image_${index}.jpg`,
        type: "image/jpg",
        uri: image,
      });
    });

    await api.post(
      "/newEstablishments",
      {
        headers: {
          Token: `Bearer ${token}`,
        },
      },
      data
    );

    navigation.navigate("Search");
  }

  console.log(token, "verificacao do token");

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Precisamos de acesso às suas fotos...");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }
    const { uri: image } = result;

    setImages([...images, image]);
  }

  return (
    <Container>
      <Headers title="Cadastrar Estabelecimento" />
      <ScrollView>
        <Title>Dados</Title>
        <Label>Nome</Label>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Nome do estabelecimento"
        />

        <Label>WhatsApp</Label>
        <Input
          value={whatsapp}
          onChangeText={setWhatsapp}
          placeholder="11 99999-9999"
        />

        <Label>Ramo de Atividade</Label>
        <Input
          value={industry}
          onChangeText={setIndustry}
          placeholder="Mecânico"
        />

        <Label>Fotos do Estabelecimento</Label>
        <UploadImages>
          {images.map((image) => {
            return <Image key={image} source={{ uri: image }} />;
          })}
        </UploadImages>
        <Add onPress={handleSelectImages}>
          <Feather name="plus" size={24} color="#000" />
        </Add>

        <Label>Horário de funcionamento</Label>
        <Input
          value={openingHours}
          onChangeText={setOpeningHours}
          placeholder="Dás 9h até 18h"
        />

        <SwitchContainer>
          <Label> Atende final de semana?</Label>
          <Switch
            thumbColor="#fff"
            trackColor={{ false: "#ccc", true: "#39CC83" }}
            value={openOnWeekends}
            onValueChange={setOpenOnWeekends}
          />
        </SwitchContainer>

        <Register onPress={handleCreateEstablishment}>
          <ButtonText> Cadastrar </ButtonText>
        </Register>
      </ScrollView>
    </Container>
  );
}
