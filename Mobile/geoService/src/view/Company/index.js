import React, { useState, useContext } from "react";
import { Contextapi } from "../../hooks/authContext";
import { Feather } from "@expo/vector-icons";
import Headers from "../../components/Headers";
import { useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import api from "../../service/api";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

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
  PickerContainer,
} from "./styled-components";

import { Alert } from "react-native";

export default function Company() {
  const { token, establishment } = useContext(Contextapi);

  const route = useRoute();
  const params = route.params;
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [industry, setIndustry] = useState({
    type: "Mecânico de carros",
    type: "Mecânico de motos",
  });
  const [opening_hours, setOpeningHours] = useState({
    hours: "Das 8h às 17h",
    hours: "Das 9h às 18h",
  });
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState([]);

  console.log(params, "vaasdasd");
  async function handleCreateEstablishment() {
    const { latitude, longitude } = params.position;
    const data = new FormData();

    data.append("name", name);
    data.append("whatsapp", whatsapp);
    data.append("industry", industry);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("opening_hours", opening_hours);
    data.append("open_on_weekends", String(open_on_weekends));
    // data.append("company_id", params.id);

    images.forEach((image, index) => {
      data.append("images", {
        name: `image_${index}.jpg`,
        type: "image/jpg",
        uri: image,
      });
    });

    await api.post("/company", data, {
      headers: {
        Token: `Bearer ${token}`,
        Authorization: establishment.id,
      },
    });
    navigation.navigate("Home");
  }

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
        {/* <Input
          value={industry}
          onChangeText={setIndustry}
          placeholder="Mecânico"
        /> */}
        <Picker
          selectedValue={industry}
          onValueChange={setIndustry}
          // style={{ height: 150 }}
        >
          <Picker.Item label="Escolha Ramo de Atividades" value="" />
          <Picker.Item label="Mecânico de carros" value="Mecânico de carros" />
          <Picker.Item label="Mecânico de motos" value="Mecânico de motos" />
        </Picker>

        <Label>Fotos do Estabelecimento</Label>
        <UploadImages>
          {images.map((image) => {
            return <Image key={image} source={{ uri: image }} />;
          })}
        </UploadImages>
        <Add onPress={handleSelectImages}>
          <Feather name="plus" size={24} color="#000" />
        </Add>

        <PickerContainer>
          <Label>Horário de funcionamento</Label>
          <Picker
            selectedValue={opening_hours}
            onValueChange={setOpeningHours}
            // style={{ height: 150 }}
          >
            <Picker.Item label="Escolha o horário de funcionamento" value="" />
            <Picker.Item label="Das 8h às 17h" value="Das 8h às 17h" />
            <Picker.Item label="Das 9h às 18h" value="Das 9h às 18h" />
          </Picker>
        </PickerContainer>
        <SwitchContainer>
          <Label> Atende final de semana?</Label>
          <Switch
            thumbColor="#fff"
            trackColor={{ false: "#ccc", true: "#39CC83" }}
            value={open_on_weekends}
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
